import {
  Message as GoogleCloudMessage,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
  SubscriptionMetadata as GoogleSubscriptionMetadata,
} from '@google-cloud/pubsub';
import Bluebird from 'bluebird';
import chalk from 'chalk';

import { TopicProperties } from '../../topic';
import { PublishOptions } from '../../interface/publishOptions';
import {
  AllSubscriptions,
  IsOpenTuple,
  PubSubClientV2,
} from '../../interface/pubSubClient';
import {
  SubscriberMetadata,
  SubscriberOptions,
} from '../../subscriber/subscriberV2';
import { SubscriberTuple } from '../../subscriber';
import Message from '../../message';
import { GooglePubSubProject } from '../../interface/GooglePubSubProject';
import { Logger } from '../../service/logger';
import { Project, Projects, createProject, getProjectNumber } from './project';
import {
  closeSubscription,
  getAllSubscriptions,
  getSubscription,
} from './subscriptions';

const DEFAULT_PROJECT = '__default__';

/**
 * @returns This is dynamic because we set env vars dynamically from cli args
 */
const getDefaultProjectFromEnvVar = () => process.env.GOOGLE_CLOUD_PROJECT;

/**
 * @private This is not a public API but internal class which is not exported
 */
export default class GooglePubSubAdapter implements PubSubClientV2 {
  protected static instance: GooglePubSubAdapter;
  public projects: Projects = {};

  public constructor() {
    this.projects[DEFAULT_PROJECT] = createProject(
      getDefaultProjectFromEnvVar(),
    );
    this.createOrGetSubscription = this.createOrGetSubscription.bind(this);
  }

  static getInstance(): GooglePubSubAdapter {
    if (!GooglePubSubAdapter.instance) {
      GooglePubSubAdapter.instance = new GooglePubSubAdapter();
    }
    return GooglePubSubAdapter.instance;
  }

  private getProject(options?: { project?: GooglePubSubProject }): Project {
    if (!options?.project?.id) {
      return this.projects[DEFAULT_PROJECT];
    }
    if (this.projects[options.project.id]) {
      return this.projects[options.project.id];
    }
    this.projects[options.project.id] = createProject(options.project.id, {
      credentials: options.project.credentials,
    });
    return this.projects[options.project.id];
  }

  public async publish<T extends TopicProperties>(
    topic: T,
    message: Record<string, unknown>,
    options?: PublishOptions,
  ): Promise<string> {
    const pubSubTopic = await this.createOrGetTopic(topic.topicName, {
      project: topic.project,
    });
    // FIXME: PUB-49 retryConfig not being considered, see https://github.com/googleapis/nodejs-pubsub/blob/master/samples/publishWithRetrySettings.js for how to use it
    const messageId = await pubSubTopic.publishJSON(
      message,
      options?.attributes,
    );
    return messageId;
  }

  public async subscribe(subscriber: SubscriberTuple): Promise<void> {
    const [, metadata] = subscriber;
    const subscription = await this.createOrGetSubscription(subscriber);
    await this.handleDeadLetterPolicyConfigurations(subscriber);
    await this.addHandler(subscriber, subscription);
    this.log(
      `   📭     ${metadata.subscriptionName} is ready to receive messages at a controlled volume of ${metadata.options?.flowControl?.maxMessages} messages.`,
      metadata,
    );
  }

  public async close(subscriber: SubscriberTuple): Promise<void> {
    const [, metadata] = subscriber;
    const project = this.getProject(metadata.options);

    if (await closeSubscription(project, subscriber)) {
      this.log(
        `   📪     ${metadata.subscriptionName} is closed now`,
        metadata,
      );
    } else {
      this.log(
        `   📪     ${metadata.subscriptionName} wasn't started at all`,
        metadata,
      );
    }
  }

  private async addHandler(
    subscriber: SubscriberTuple,
    subscription: GoogleCloudSubscription,
  ): Promise<void> {
    const [subscriberInstance] = subscriber;
    await subscriberInstance.init();
    subscription.on('message', (message: GoogleCloudMessage): void => {
      subscriberInstance
        .handleMessage(Message.fromGCloud(message))
        .catch(() => {
          message.nack();
        });
    });

    subscription.on('error', (error) => subscriberInstance.handleError(error));
  }

  private log(message: string, metadata?: SubscriberTuple[1]): void {
    Logger.Instance.info({ metadata }, chalk.green.bold(message));
  }

  private async updateMetaData(subscriber: SubscriberTuple) {
    const { ackDeadlineSeconds, retryPolicy, deadLetterPolicy, labels } =
      await this.getMergedSubscriptionOptions(subscriber);
    const toUpdateOptions: GoogleSubscriptionMetadata = {
      labels,
      ackDeadlineSeconds,
      retryPolicy,
      deadLetterPolicy,
    };
    await this.getSubscription(subscriber).setMetadata(toUpdateOptions);
  }

  /**
   * Create subscription if it does not exist yet.
   */
  private async createOrGetSubscription(
    subscriber: SubscriberTuple,
  ): Promise<GoogleCloudSubscription> {
    const [, metadata] = subscriber;

    if (await this.subscriptionExists(subscriber)) {
      Logger.Instance.info(
        { metadata },
        chalk.gray(`   ✔️      ${metadata.subscriptionName} already exists.`),
      );
      await this.updateMetaData(subscriber);
    } else {
      const topic = await this.createOrGetTopic(
        metadata.topicName,
        metadata.options,
      );
      await this.createSubscription(topic, subscriber);
    }
    return this.getSubscription(subscriber);
  }

  private async createDeadLetterDefaultSubscriber(
    subscriber: SubscriberTuple,
  ): Promise<void> {
    const [, metadata] = subscriber;
    try {
      const { client } = this.getProject(metadata.options);
      const deadLetterPolicy = metadata.options?.deadLetterPolicy;

      if (!deadLetterPolicy?.deadLetterTopic) return;

      const defaultSubscriberName =
        deadLetterPolicy?.deadLetterTopic + '.default';

      const [defaultSubscriberExists] = await client
        .subscription(defaultSubscriberName)
        .exists();

      if (defaultSubscriberExists) return;

      const topic = await this.createOrGetTopic(
        deadLetterPolicy?.deadLetterTopic,
        {},
      );

      await topic.createSubscription(defaultSubscriberName, {
        expirationPolicy: {
          ttl: null,
        },
      });
    } catch (err) {
      Logger.Instance.error(
        { metadata, err },
        `Error while creating default deadLetter subscription for ${metadata.subscriptionName}`,
      );
    }
  }
  private async getMergedSubscriptionOptions(
    subscriber: SubscriberTuple,
  ): Promise<GoogleSubscriptionMetadata> {
    const subscriberOptions = subscriber[1].options;
    const ackDeadlineSeconds = subscriberOptions?.ackDeadline;
    const labels = subscriberOptions?.labels || {};
    try {
      if (process.env.GOOGLE_CLOUD_LABELS || process.env.PUBSUB_LABELS) {
        const parsedLabels = JSON.parse(
          process.env.GOOGLE_CLOUD_LABELS! || process.env.PUBSUB_LABELS!,
        );
        Object.entries(parsedLabels).forEach(([key, val]) => {
          if (labels[key] == null) {
            labels[key] = val as string;
          }
        });
      }
    } catch (err) {
      this.log('Invalid GOOGLE_CLOUD_LABELS');
    }
    return {
      ...subscriberOptions,
      labels,
      ackDeadlineSeconds,
      ...(await this.mergeDeadLetterPolicy(subscriber[1].options)),
    };
  }

  private async createSubscription(
    topic: GoogleCloudTopic,
    subscriber: SubscriberTuple,
  ): Promise<void> {
    const [, metadata] = subscriber;
    try {
      await topic.createSubscription(
        metadata.subscriptionName,
        await this.getMergedSubscriptionOptions(subscriber),
      );
      Logger.Instance.info(
        { metadata },
        chalk.gray(`   ✔️      ${metadata.subscriptionName} created.`),
      );
    } catch (err) {
      Logger.Instance.error(
        { metadata, err },
        `   ❌      There was an error creating "${metadata.subscriptionName}" subscription.`,
      );
      throw err;
    }
  }

  private async mergeDeadLetterPolicy(
    options: SubscriberOptions | undefined,
  ): Promise<SubscriberOptions | undefined> {
    if (!options?.deadLetterPolicy) return;
    return {
      ...options,
      deadLetterPolicy: {
        ...options.deadLetterPolicy,
        deadLetterTopic: await this.createDeadLetterTopic(
          options.deadLetterPolicy,
          options,
        ),
      },
    };
  }

  private async createDeadLetterTopic(
    policy: NonNullable<SubscriberOptions['deadLetterPolicy']>,
    options?: SubscriberOptions,
  ): Promise<string> {
    const topic = await this.createOrGetTopic(policy.deadLetterTopic, options);
    return topic.name;
  }

  private async checkDeadLetterConfiguration(subscriber: SubscriberTuple) {
    const [, metadata] = subscriber;
    const { options } = metadata;
    const { client } = this.getProject(options);
    const deadLetterTopic = options?.deadLetterPolicy?.deadLetterTopic;
    if (!deadLetterTopic) {
      return;
    }

    const [subscriptions] = await client
      .topic(deadLetterTopic)
      .getSubscriptions();

    if (subscriptions.length === 0) {
      Logger.Instance.warn(
        { metadata },
        `Please set createDefaultSubscription: true in deadLetterPolicy to create default subscriber for dead letter topic of ${metadata.subscriptionName}. Ignore if already added subscription for it.`,
      );
    }
  }

  private async handleDeadLetterPolicyConfigurations(
    subscriber: SubscriberTuple,
  ) {
    const [, metadata] = subscriber;
    const { options } = metadata;
    if (!options?.deadLetterPolicy) {
      return;
    }
    await this.bindPolicyToSubscriber(metadata);
    await this.bindPolicyToDeadLetterTopic(
      options.deadLetterPolicy.deadLetterTopic,
      options,
      metadata,
    );
    if (options?.deadLetterPolicy?.createDefaultSubscription) {
      await this.createDeadLetterDefaultSubscriber(subscriber);
    } else {
      await this.checkDeadLetterConfiguration(subscriber);
    }
  }

  private async bindPolicyToSubscriber(
    metadata: SubscriberMetadata,
  ): Promise<void> {
    const {
      topicName: subscriptionTopicName,
      subscriptionName,
      options,
    } = metadata;
    const project = this.getProject(options);
    const projectNumber = await getProjectNumber(project);

    if (!projectNumber) {
      Logger.Instance.warn(
        { metadata },
        `   ❌      Could not bind policy for "${subscriptionName}" subscriber due to no project number`,
      );
      return;
    }

    try {
      const pubSubTopic = project.client.topic(subscriptionTopicName);
      const myPolicy = {
        bindings: [
          {
            role: 'roles/pubsub.subscriber',
            members: [
              `serviceAccount:service-${projectNumber}@gcp-sa-pubsub.iam.gserviceaccount.com`,
            ],
          },
        ],
      };
      await pubSubTopic.subscription(subscriptionName).iam.setPolicy(myPolicy);
    } catch (err) {
      Logger.Instance.error(
        { metadata, err },
        `   ❌      Error while binding policy for "${subscriptionName}" subscription.`,
      );
    }
  }

  private async bindPolicyToDeadLetterTopic(
    deadLetterTopicName: string,
    options: { project?: GooglePubSubProject },
    metadata: SubscriberMetadata,
  ): Promise<void> {
    const project = this.getProject(options);
    const projectNumber = await getProjectNumber(project);
    if (!projectNumber) {
      Logger.Instance.warn(
        { metadata },
        `   ❌      Could not bind policy for "${deadLetterTopicName}" DLQ topic due to no project number`,
      );
      return;
    }

    try {
      const pubSubTopic = project.client.topic(deadLetterTopicName);
      const myPolicy = {
        bindings: [
          {
            role: 'roles/pubsub.publisher',
            members: [
              `serviceAccount:service-${projectNumber}@gcp-sa-pubsub.iam.gserviceaccount.com`,
            ],
          },
        ],
      };
      await pubSubTopic.iam.setPolicy(myPolicy);
    } catch (err) {
      Logger.Instance.error(
        { metadata, err },
        `   ❌      Error while binding policy for "${deadLetterTopicName}" DLQ topic.`,
      );
    }
  }

  private getSubscription(
    subscriber: SubscriberTuple,
  ): GoogleCloudSubscription {
    const [, metadata] = subscriber;
    return getSubscription(this.getProject(metadata.options), subscriber);
  }

  private async subscriptionExists(
    subscriber: SubscriberTuple,
  ): Promise<boolean> {
    const [subscriptionExists] = await this.getSubscription(
      subscriber,
    ).exists();
    return subscriptionExists;
  }

  protected async createOrGetTopic(
    topicName: string,
    options?: { project?: GooglePubSubProject },
  ): Promise<GoogleCloudTopic> {
    const project = this.getProject(options);
    const cachedTopic = project.topics.get(topicName);

    if (cachedTopic) {
      return cachedTopic;
    }

    const pubSubTopic = project.client.topic(topicName);
    const [topic] = await pubSubTopic.get({ autoCreate: true });
    project.topics.set(topicName, topic);
    return topic;
  }

  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    const subscriptions = await Bluebird.map(
      Object.values(this.projects),
      async (project) => {
        const projectSubs = getAllSubscriptions(project);
        return projectSubs.map(({ metadata }) => {
          return {
            topicName: metadata?.topic,
            subscriptionName: metadata?.name || '',
          };
        });
      },
    );
    return subscriptions.flat();
  }

  public getAllSubscriptionsState(): IsOpenTuple[] {
    const subscriptions = Object.values(this.projects).map((project) => {
      const projectSubs = getAllSubscriptions(project);
      return projectSubs.map(
        ({ isOpen, metadata }) =>
          [metadata?.name?.split('/')?.slice(-1)[0], isOpen] as IsOpenTuple,
      );
    });

    return subscriptions.flat();
  }
}
