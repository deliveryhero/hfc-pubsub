import chalk from 'chalk';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Topic, Payload, Subscriber } from '../index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  PubSub as GooglePubSub,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Message as GCloudMessage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Subscription as GCloudSubscription,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Topic as GCloudTopic,
} from '@google-cloud/pubsub';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SubscriberOptions } from '@google-cloud/pubsub/build/src/subscriber';
import Message from '../message';
import { SubscriberTuple } from 'subscriber';
import { SubscriberMetadata } from 'subscriber/subscriberV2';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export default class GooglePubSubAdapter implements PubSubClientV2 {
  protected static instance: GooglePubSubAdapter;
  protected client: GooglePubSub;
  protected topics: Map<GCloudTopic['name'], GCloudTopic>;

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
    subscription: GCloudSubscription,
  ): void {
    const [subscriberClass] = subscriber;
    subscription.on(
      'message',
      async (message: GCloudMessage): Promise<void> => {
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

  private getSubscription(
    subscriber: SubscriberTuple,
    client: GooglePubSub,
  ): GCloudSubscription {
    const [, metadata] = subscriber;
    return client.subscription(
      metadata.subscriptionName,
      this.getSubscriberOptions(subscriber),
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
  ): Promise<GCloudSubscription> {
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

    // topic should be created before subscriptions are created
    const topic = await this.createOrGetTopic(metadata.topicName);
    await this.createSubscription(topic, subscriber);

    console.log(
      chalk.green(`Subscription ${metadata.subscriptionName} created.`),
    );
    return this.getSubscription(subscriber, client);
  }
  private async createSubscription(
    topic: GCloudTopic,
    subscriber: SubscriberTuple,
  ): Promise<void> {
    const [, metadata] = subscriber;
    // Creates a new subscription
    topic.createSubscription(
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

  protected async createOrGetTopic(topicName: string): Promise<GCloudTopic> {
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
