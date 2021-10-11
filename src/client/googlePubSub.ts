import {
  PubSub as GooglePubSub,
  Message as GoogleCloudMessage,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
  SubscriptionMetadata as GoogleSubscriptionMetadata,
} from '@google-cloud/pubsub';
import { Resource } from '@google-cloud/resource';
import { CredentialBody } from 'google-auth-library';
import chalk from 'chalk';
import Bluebird from 'bluebird';

import { Topic, Payload } from '../index';
import { PublishOptions } from '../interface/publishOptions';
import {
  AllSubscriptions,
  IsOpenTuple,
  PubSubClientV2,
} from '../interface/pubSubClient';
import {
  SubscriberMetadata,
  SubscriberOptions,
} from '../subscriber/subscriberV2';
import { SubscriberTuple } from '../subscriber';
import Message from '../message';
import { GooglePubSubProject } from '../interface/GooglePubSubProject';
import { Logger } from '../service/logger';

export interface Project {
  client: GooglePubSub;
  topics: Map<GoogleCloudTopic['name'], GoogleCloudTopic>;
  subscriptions: Map<GoogleCloudSubscription['name'], GoogleCloudSubscription>;
  projectId: string;
  credentials?: CredentialBody;
}
export interface Projects {
  [key: string]: Project;
}

export interface CreateClientOptions {
  credentials?: CredentialBody;
}

const DEFAULT_PROJECT = 'default';

export default class GooglePubSubAdapter implements PubSubClientV2 {
  protected static instance: GooglePubSubAdapter;
  public projects: Projects = {};

  public constructor(client: GooglePubSub) {
    this.projects[DEFAULT_PROJECT] = {
      client,
      topics: new Map(),
      subscriptions: new Map(),
      projectId: process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID || '',
    };
    this.createOrGetSubscription = this.createOrGetSubscription.bind(this);
  }

  public static getInstance(): GooglePubSubAdapter {
    if (!GooglePubSubAdapter.instance) {
      GooglePubSubAdapter.instance = new GooglePubSubAdapter(
        GooglePubSubAdapter.createClient(
          process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID || '',
        ),
      );
    }
    return GooglePubSubAdapter.instance;
  }

  public static createClient(
    projectId: string,
    options?: CreateClientOptions,
  ): GooglePubSub {
    return new GooglePubSub({
      projectId: projectId,
      credentials: options?.credentials,
    });
  }

  public async publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
    options: PublishOptions,
  ): Promise<string> {
    const pubSubTopic = await this.createOrGetTopic(topic.name, {
      project: topic.project,
    });
    // FIXME: PUB-49 retryConfig not being considered, see https://github.com/googleapis/nodejs-pubsub/blob/master/samples/publishWithRetrySettings.js for how to use it
    const messageId = await pubSubTopic.publishJSON(
      message,
      options.attributes,
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
    const { subscriptions } = this.getProject(metadata.options);
    if (!subscriptions.has(metadata.subscriptionName)) {
      this.log(
        `   📪     ${metadata.subscriptionName} wasn't started at all`,
        metadata,
      );
      return;
    }

    const subscription = await this.getSubscription(subscriber);
    await subscription.close();
    subscription.removeAllListeners();
    subscriptions.delete(metadata.subscriptionName);
    this.log(`   📪     ${metadata.subscriptionName} is closed now`, metadata);
  }

  private async addHandler(
    subscriber: SubscriberTuple,
    subscription: GoogleCloudSubscription,
  ): Promise<void> {
    const [subscriberClass] = subscriber;
    const subscriberInstance = new subscriberClass();
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

  private getSubscriberOptions(
    subscriber: SubscriberTuple,
  ): SubscriberOptions | undefined {
    const [, metadata] = subscriber;
    return metadata.options;
  }

  private async updateMetaData(subscriber: SubscriberTuple) {
    const { ackDeadlineSeconds, retryPolicy, deadLetterPolicy } =
      await this.getMergedSubscriptionOptions(subscriber);
    const toUpdateOptions: GoogleSubscriptionMetadata = {
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
  private async getMergedSubscriptionOptions(subscriber: SubscriberTuple) {
    const subscriberOptions = this.getSubscriberOptions(subscriber);
    const ackDeadlineSeconds =
      subscriberOptions?.ackDeadlineSeconds || subscriberOptions?.ackDeadline;
    return {
      ...subscriberOptions,
      ackDeadlineSeconds,
      ...(await this.mergeDeadLetterPolicy(
        this.getSubscriberOptions(subscriber),
      )),
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
      // FIXME: PUB-70 Should throw error here
    }
  }

  private async mergeDeadLetterPolicy(
    options: SubscriberOptions | undefined,
  ): Promise<SubscriberOptions | undefined> {
    if (!options) return;
    if (options.deadLetterPolicy) {
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
    return;
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
    const client = this.getProject(metadata.options).client;
    const options = this.getSubscriberOptions(subscriber);
    const deadLetterTopic = options?.deadLetterPolicy?.deadLetterTopic;
    if (!deadLetterTopic) return;
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
    const options = this.getSubscriberOptions(subscriber);
    if (options?.deadLetterPolicy) {
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
  }

  private async getProjectNumber() {
    try {
      if (process.env.PROJECT_NUMBER) {
        return process.env.PROJECT_NUMBER;
      }
      const projectId = process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID;
      if (!projectId) {
        return '';
      }
      const resource = new Resource();
      const project = resource.project(projectId);
      const projectInfo = await project.get();
      // project.info return [_, projectInfoIncludingProjectNumber]
      return (projectInfo as any)[1]?.projectNumber;
    } catch (err) {
      Logger.Instance.error({ err }, 'Error while getting project number');
      return '';
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
    const projectNumber = await this.getProjectNumber();

    if (projectNumber) {
      try {
        const pubSubTopic = this.getProject(options).client.topic(
          subscriptionTopicName,
        );
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
        await pubSubTopic
          .subscription(subscriptionName)
          .iam.setPolicy(myPolicy);
      } catch (err) {
        Logger.Instance.error(
          { metadata, err },
          `   ❌      Error while binding policy for "${metadata.subscriptionName}" subscription.`,
        );
      }
    }
  }

  private async bindPolicyToDeadLetterTopic(
    deadLetterTopicName: string,
    options: { project?: GooglePubSubProject },
    metadata: SubscriberMetadata,
  ): Promise<void> {
    const projectNumber = await this.getProjectNumber();

    if (projectNumber) {
      try {
        const pubSubTopic =
          this.getProject(options).client.topic(deadLetterTopicName);
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
  }

  private getSubscription(
    subscriber: SubscriberTuple,
  ): GoogleCloudSubscription {
    const [, metadata] = subscriber;
    const { client, subscriptions } = this.getProject(metadata.options);
    if (subscriptions.has(metadata.subscriptionName)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return subscriptions.get(metadata.subscriptionName)!;
    }

    const subscription = client.subscription(
      metadata.subscriptionName,
      this.getSubscriberOptions(subscriber),
    );

    subscriptions.set(metadata.subscriptionName, subscription);
    return subscription;
  }

  private async subscriptionExists(
    subscriber: SubscriberTuple,
  ): Promise<boolean> {
    const [subscriptionExists] = await this.getSubscription(
      subscriber,
    ).exists();
    return subscriptionExists;
  }

  public getProject(options?: { project?: GooglePubSubProject }): Project {
    if (!options || !options.project?.id) {
      return this.projects[DEFAULT_PROJECT];
    }
    if (this.projects[options.project?.id]) {
      return this.projects[options.project?.id];
    }
    // init project with client
    this.projects[options.project?.id] = GooglePubSubAdapter.initProject(
      options.project?.id,
      {
        credentials: options?.project?.credentials,
      },
    );
    return this.projects[options.project?.id];
  }

  protected static initProject(
    projectId: GooglePubSubProject['id'],
    options?: CreateClientOptions,
  ): Project {
    return {
      client: GooglePubSubAdapter.createClient(projectId, options),
      topics: new Map(),
      subscriptions: new Map(),
      projectId,
    };
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
      Object.keys(this.projects),
      async (project) => {
        const [subscriptions] = await this.projects[
          project
        ].client.getSubscriptions();
        return subscriptions.map(({ metadata }) => {
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
      const subscriptions = project.subscriptions.values();
      return Array.from(subscriptions).map(
        ({ isOpen, metadata }) =>
          [metadata?.name?.split('/')?.slice(-1)[0], isOpen] as IsOpenTuple,
      );
    });

    return subscriptions.flat();
  }
}
