import {
  Message as GoogleCloudMessage,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
  SubscriptionMetadata as GoogleSubscriptionMetadata,
  TopicMetadata,
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
        .catch((error) => {
          Logger.Instance.error(
            { error },
            'Unexpected error while processing message',
          );
          message.nack();
        });
    });

    subscription.on('error', (error) => subscriberInstance.handleError(error));
  }

  private log(message: string, metadata?: SubscriberTuple[1]): void {
    Logger.Instance.info({ metadata }, chalk.green.bold(message));
  }

  private async updateMetaData(subscriber: SubscriberTuple) {
    const [, metadata] = subscriber;
    const { ackDeadlineSeconds, retryPolicy, deadLetterPolicy, labels } =
      metadata.options;
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
      const topic = await this.createOrGetTopic(metadata.topicName, {
        // Subscriptions shouldn't apply any labels to topics
        project: metadata.options?.project,
      });
      await this.createSubscription(topic, subscriber);
    }
    return this.getSubscription(subscriber);
  }

  private async createSubscription(
    topic: GoogleCloudTopic,
    subscriber: SubscriberTuple,
  ): Promise<void> {
    const [, metadata] = subscriber;
    try {
      await topic.createSubscription(
        metadata.subscriptionName,
        metadata.options,
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

  private async handleDeadLetterPolicyConfigurations(
    subscriber: SubscriberTuple,
  ) {
    const [, metadata] = subscriber;
    const { options } = metadata;
    if (!options?.deadLetterPolicy) {
      return;
    }
    const project = this.getProject(options);
    const dlqTopicName = options.deadLetterPolicy.deadLetterTopic;
    const dlqTopic = await this.createOrGetTopic(dlqTopicName, {
      project: options?.project,
      // DLQ topic's labels are same as subscription
      labels: options.labels,
    });

    await bindPolicyToSubscriber(metadata, project);
    await bindPolicyToDeadLetterTopic(dlqTopic, metadata, project);
    if (options?.deadLetterPolicy?.createDefaultSubscription) {
      await createDeadLetterDefaultSubscriber(dlqTopic, metadata, project);
    } else {
      await checkDeadLetterConfiguration(dlqTopic, metadata);
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
    options?: {
      project?: GooglePubSubProject;
      labels?: TopicMetadata['labels'];
    },
  ): Promise<GoogleCloudTopic> {
    const project = this.getProject(options);
    const cachedTopic = project.topics.get(topicName);

    if (cachedTopic) {
      return cachedTopic;
    }

    const pubSubTopic = project.client.topic(topicName);
    const [topic] = await pubSubTopic.get({ autoCreate: true });
    if (options?.labels) {
      await topic.setMetadata({
        labels: options?.labels,
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

  public compressMessage(message: Record<string, unknown>): Uint8Array {
    return Pako.gzip(JSON.stringify(message));
  }
}
