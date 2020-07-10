/* eslint-disable @typescript-eslint/no-unused-vars */
import chalk from 'chalk';
import { Topic, Payload } from '../index';
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
import {
  PubSub as GooglePubSub,
  Message as GoogleCloudMessage,
  Subscription as GoogleCloudSubscription,
  Topic as GoogleCloudTopic,
} from '@google-cloud/pubsub';
import { SubscriberOptions } from '../subscriber/subscriberV2';
import { SubscriberTuple } from 'subscriber';
import Message from '../message';
/* eslint-disable @typescript-eslint/no-unused-vars */

export default class GooglePubSubAdapter implements PubSubClientV2 {
  protected static instance: GooglePubSubAdapter;
  protected client: GooglePubSub;
  protected topics: Map<GoogleCloudTopic['name'], GoogleCloudTopic>;

  public constructor(client: GooglePubSub) {
    this.client = client;
    this.topics = new Map();
    this.createOrGetSubscription = this.createOrGetSubscription.bind(this);
  }

  public static getInstance(): GooglePubSubAdapter {
    if (!GooglePubSubAdapter.instance) {
      GooglePubSubAdapter.instance = new GooglePubSubAdapter(
        new GooglePubSub({
          projectId: process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID,
        }),
      );
    }
    return GooglePubSubAdapter.instance;
  }

  public async publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): Promise<string> {
    const pubSubTopic = await this.createOrGetTopic(topic.getName());
    const messageId = await pubSubTopic.publish(
      Buffer.from(JSON.stringify(message)),
    );
    return messageId;
  }

  public async subscribe(subscriber: SubscriberTuple): Promise<void> {
    const [, metadata] = subscriber;
    const subscription = await this.createOrGetSubscription(subscriber);
    this.addHandler(subscriber, subscription);
    this.log(
      `   📭     ${metadata.subscriptionName} is ready to receive messages at a controlled volume of ${metadata.options?.flowControl?.maxMessages} messages.`,
    );
  }

  private addHandler(
    subscriber: SubscriberTuple,
    subscription: GoogleCloudSubscription,
  ): void {
    const [subscriberClass] = subscriber;
    subscription.on(
      'message',
      async (message: GoogleCloudMessage): Promise<void> => {
        const subscriber = new subscriberClass();
        subscriber.init();
        try {
          await subscriber.handleMessage(Message.fromGCloud(message));
        } catch (err) {
          message.nack();
        }
      },
    );
  }

  private log(message: string): void {
    console.log(chalk.green.bold(message));
  }

  private getSubscriberOptions(
    subscriber: SubscriberTuple,
  ): SubscriberOptions | undefined {
    const [, metadata] = subscriber;
    return metadata.options;
  }

  /**
   * Create subscription if it does not exist yet.
   */
  private async createOrGetSubscription(
    subscriber: SubscriberTuple,
  ): Promise<GoogleCloudSubscription> {
    const client = new GooglePubSub({
      projectId: process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID,
    });
    const [, metadata] = subscriber;
    if (await this.subscriptionExists(metadata.subscriptionName, client)) {
      console.log(
        chalk.gray(`Subscription ${metadata.subscriptionName} already exists.`),
      );
      return this.getSubscription(subscriber, client);
    }

    const topic = await this.createOrGetTopic(metadata.topicName);
    await this.createSubscription(topic, subscriber);

    return this.getSubscription(subscriber, client);
  }

  private async createSubscription(
    topic: GoogleCloudTopic,
    subscriber: SubscriberTuple,
  ): Promise<void> {
    const [, metadata] = subscriber;
    try {
      await topic.createSubscription(metadata.subscriptionName, {
        ...(await this.mergeDeadLetterPolicy(
          this.getSubscriberOptions(subscriber),
        )),
      });
      console.log(
        chalk.green(`Subscription ${metadata.subscriptionName} created.`),
      );
    } catch (e) {
      console.error('There was an error creating a subscription.', e);
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
          ),
        },
      };
    }
    return;
  }

  private async createDeadLetterTopic(
    policy: NonNullable<SubscriberOptions['deadLetterPolicy']>,
  ): Promise<string> {
    const topic = await this.createOrGetTopic(policy.deadLetterTopic);
    return topic.name;
  }

  private getSubscription(
    subscriber: SubscriberTuple,
    client: GooglePubSub,
  ): GoogleCloudSubscription {
    const [, metadata] = subscriber;
    return client.subscription(
      metadata.subscriptionName,
      this.getSubscriberOptions(subscriber),
    );
  }

  private async subscriptionExists(
    subscriptionName: string,
    client: GooglePubSub,
  ): Promise<boolean> {
    const [subscriptionExists] = await client
      .subscription(subscriptionName)
      .exists();
    return subscriptionExists;
  }

  protected getClient(): GooglePubSub {
    return this.client;
  }

  protected async createOrGetTopic(
    topicName: string,
  ): Promise<GoogleCloudTopic> {
    const cachedTopic = this.topics.get(topicName);

    if (cachedTopic) {
      return cachedTopic;
    }

    const pubSubTopic = this.getClient().topic(topicName);
    const [topic] = await pubSubTopic.get({ autoCreate: true });
    this.topics.set(topicName, topic);
    return topic;
  }

  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    const [subscriptionData] = await this.client.getSubscriptions();
    const subscriptionList = subscriptionData.map(
      (datum): AllSubscriptions => {
        const { metadata } = datum;
        return {
          topicName: metadata?.topic || null,
          subscriptionName: metadata?.name || datum.name,
        };
      },
    );
    return subscriptionList;
  }
}
