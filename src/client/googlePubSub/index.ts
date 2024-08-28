import {
  Message as GoogleCloudMessage,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
  SubscriptionMetadata as GoogleSubscriptionMetadata,
} from '@google-cloud/pubsub';
import Bluebird from 'bluebird';
import chalk from 'chalk';
import Pako from 'pako';

import { TopicProperties } from '../../topic';
import { GooglePubSubProject, PublishOptions } from '../../interface';
import {
  AllSubscriptions,
  IsOpenTuple,
  PubSubClientV2,
} from '../../interface/pubSubClient';
import { SubscriberTuple } from '../../subscriber';
import Message from '../../message';
import { Logger } from '../../service/logger';
import { getNameFromResourceName } from '../../utils';
import { createProject, Project, Projects } from './project';
import {
  closeSubscription,
  getAllSubscriptions,
  getSubscription,
} from './subscriptions';
import {
  bindPolicyToDeadLetterTopic,
  bindPolicyToSubscriber,
  checkDeadLetterConfiguration,
  createDeadLetterDefaultSubscriber,
} from './deadLetter';

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
  }

  static getInstance(): GooglePubSubAdapter {
    if (!GooglePubSubAdapter.instance) {
      GooglePubSubAdapter.instance = new GooglePubSubAdapter();
    }
    return GooglePubSubAdapter.instance;
  }

  private getProject({ project }: { project?: GooglePubSubProject }): Project {
    if (!project?.id) {
      return this.projects[DEFAULT_PROJECT];
    }
    if (this.projects[project.id]) {
      return this.projects[project.id];
    }
    this.projects[project.id] = createProject(project.id, {
      credentials: project.credentials,
    });
    return this.projects[project.id];
  }

  public async publish<T extends TopicProperties>(
    topic: T,
    message: Record<string, unknown>,
    options?: PublishOptions,
  ): Promise<string> {
    const pubSubTopic = await this.createOrGetTopic(topic.topicName, {
      project: topic.project,
      // Publish sets canonical labels for Topics
      labels: options?.labels,
    });

    if (options?.enableGZipCompression) {
      const compressedMsg = Buffer.from(this.compressMessage(message));
      const [messageId] = await pubSubTopic.publishMessage({
        data: compressedMsg,
        attributes: options?.attributes,
      });
      return messageId;
    }
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
    const dlqTopic = await this.handleDeadLetterPolicyConfigurations(
      subscriber,
    );
    await this.updateMetaData(subscriber, dlqTopic);
    await this.addHandler(subscriber, subscription);
    Logger.Instance.info(
      Logger.getInfo(metadata),
      `   📭     Subscription ready to receive messages at a controlled volume of ${metadata.options.flowControl?.maxMessages} messages`,
    );
  }

  public async close(subscriber: SubscriberTuple): Promise<void> {
    const [, metadata] = subscriber;
    const project = this.getProject(metadata.options);

    if (await closeSubscription(project, subscriber)) {
      Logger.Instance.info(
        Logger.getInfo(metadata),
        `   📪     Subscription closed now`,
      );
    } else {
      Logger.Instance.info(
        Logger.getInfo(metadata),
        `   📪     Subscription wasn't started at all`,
      );
    }
  }

  private async addHandler(
    subscriber: SubscriberTuple,
    subscription: GoogleCloudSubscription,
  ): Promise<void> {
    const [subscriberInstance, metadata] = subscriber;
    await subscriberInstance.init();
    subscription.on('message', (gCloudMessage: GoogleCloudMessage): void => {
      const message = Message.fromGCloud(gCloudMessage);
      subscriberInstance.handleMessage(message).catch((err) => {
        Logger.Instance.error(
          { err, ...Logger.getInfo(metadata, message) },
          'Unexpected error while processing message',
        );
        message.nack();
      });
    });

    subscription.on('error', (error) => subscriberInstance.handleError(error));
  }

  private async updateMetaData(
    subscriber: SubscriberTuple,
    dlqTopic: GoogleCloudTopic | undefined,
  ) {
    const [, metadata] = subscriber;
    const { ackDeadline, retryPolicy, deadLetterPolicy, labels } =
      metadata.options;
    const toUpdateOptions: GoogleSubscriptionMetadata = {
      labels,
      retryPolicy,
      // This is different because GCP's api has different properties when creating/updating subscriptions
      ackDeadlineSeconds: ackDeadline,
      ...(deadLetterPolicy && dlqTopic
        ? {
            deadLetterPolicy: {
              ...deadLetterPolicy,
              deadLetterTopic: dlqTopic.name,
            },
          }
        : undefined),
    };
    await this.getSubscription(subscriber).setMetadata(toUpdateOptions);
    Logger.Instance.info(
      Logger.getInfo(metadata),
      '   🔄      Updated subscription metadata',
    );
  }

  /**
   * Create subscription if it does not exist yet.
   */
  private async createOrGetSubscription(
    subscriber: SubscriberTuple,
  ): Promise<GoogleCloudSubscription> {
    const [, metadata] = subscriber;
    const subscription = this.getSubscription(subscriber);

    const [subscriptionExists] = await subscription.exists();
    if (subscriptionExists) {
      Logger.Instance.info(
        Logger.getInfo(metadata),
        chalk.gray(`   ✔️      Subscription already exists`),
      );
      return subscription;
    }

    const topic = await this.createOrGetTopic(metadata.topicName, {
      ...metadata.options,
      // Subscriptions shouldn't apply any labels to topics
      labels: undefined,
    });

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { deadLetterPolicy, ...optionsWithoutDlq } = metadata.options;
      await topic.createSubscription(
        metadata.subscriptionName,
        // Don't assign dlq until we create DLQ topic and assign roles later
        optionsWithoutDlq,
      );
      Logger.Instance.info(
        Logger.getInfo(metadata),
        chalk.gray(`   ✔️      Subscription created`),
      );
    } catch (err) {
      Logger.Instance.error(
        { err, ...Logger.getInfo(metadata) },
        `   ❌      Error creating subscription`,
      );
      throw err;
    }
    return subscription;
  }

  private async handleDeadLetterPolicyConfigurations(
    subscriber: SubscriberTuple,
  ) {
    const [, metadata] = subscriber;
    const { options } = metadata;
    if (!options.deadLetterPolicy) {
      return;
    }
    const project = this.getProject(options);
    const dlqTopicName = options.deadLetterPolicy.deadLetterTopic;
    const dlqTopic = await this.createOrGetTopic(dlqTopicName, {
      project: options.project,
      // DLQ topic's labels are same as subscription
      labels: options.labels,
    });

    await bindPolicyToSubscriber(metadata, project);
    await bindPolicyToDeadLetterTopic(dlqTopic, metadata, project);
    if (options.deadLetterPolicy?.createDefaultSubscription) {
      await createDeadLetterDefaultSubscriber(dlqTopic, metadata, project);
    } else {
      await checkDeadLetterConfiguration(dlqTopic, metadata);
    }
    return dlqTopic;
  }

  private getSubscription(
    subscriber: SubscriberTuple,
  ): GoogleCloudSubscription {
    const [, metadata] = subscriber;
    return getSubscription(this.getProject(metadata.options), subscriber);
  }

  protected async createOrGetTopic(
    topicName: string,
    options: {
      project?: GooglePubSubProject;
      labels?: GoogleSubscriptionMetadata['labels'];
    } = {},
  ): Promise<GoogleCloudTopic> {
    const project = this.getProject(options);
    const cachedTopic = project.topics.get(topicName);

    if (cachedTopic) {
      return cachedTopic;
    }

    const pubSubTopic = project.client.topic(topicName);
    const [topic] = await pubSubTopic.get({ autoCreate: true });
    if (options.labels) {
      await topic.setMetadata({
        labels: options.labels,
      });
    }
    project.topics.set(topicName, topic);
    return topic;
  }

  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    const subscriptions = await Bluebird.map(
      Object.values(this.projects),
      async (project) => {
        const projectSubs = getAllSubscriptions(project);
        return projectSubs.map(({ name, metadata }) => {
          return {
            topicName: getNameFromResourceName(metadata?.topic ?? ''),
            subscriptionName: getNameFromResourceName(name),
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
        ({ isOpen, name }) =>
          [getNameFromResourceName(name), isOpen] as IsOpenTuple,
      );
    });

    return subscriptions.flat();
  }

  public compressMessage(message: Record<string, unknown>): Uint8Array {
    return Pako.gzip(JSON.stringify(message));
  }
}
