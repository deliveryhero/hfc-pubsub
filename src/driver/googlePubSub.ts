import chalk from 'chalk';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PubSubClient from '../interface/pubSubClient';
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

export default class GooglePubSubAdapter implements PubSubClient {
  protected static instance: GooglePubSubAdapter;
  protected client: GooglePubSub;
  public constructor(client: GooglePubSub) {
    this.client = client;
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
    let messageId = await pubSubTopic.publish(
      Buffer.from(JSON.stringify(message)),
    );
    return messageId;
  }
  public async subscribe(subscriber: typeof Subscriber): Promise<void> {
    const subscription = await this.createOrGetSubscription(subscriber);
    this.addHandler(subscriber, subscription);
    this.log(
      `   📭     ${subscriber.subscriptionName} is ready to receive messages at a controlled volume of ${subscriber.maxMessages} messages.`,
    );
  }

  private addHandler(
    subscriberClass: typeof Subscriber,
    subscription: GCloudSubscription,
  ): void {
    subscription.on(
      'message',
      async (message: GCloudMessage): Promise<void> => {
        const subscriber = new subscriberClass();
        subscriber.init();
        await subscriber.handleMessage(Message.fromGCloud(message));
      },
    );
  }

  private getSubscription(subscriber: typeof Subscriber): GCloudSubscription {
    return this.getClient().subscription(
      subscriber.subscriptionName,
      this.getSubscriberOptions(subscriber),
    );
  }

  private log(message: string): void {
    console.log(chalk.green.bold(message));
  }

  private getSubscriberOptions(
    subscription: typeof Subscriber,
  ): SubscriberOptions {
    return {
      ackDeadline: subscription.ackDeadlineSeconds,
      flowControl: {
        maxMessages: subscription.maxMessages,
      },
    };
  }

  /**
   * Create subscription if it does not exist yet.
   */
  private async createOrGetSubscription(
    subscriber: typeof Subscriber,
  ): Promise<GCloudSubscription> {
    if (await this.subscriptionExists(subscriber.subscriptionName)) {
      console.log(
        chalk.gray(
          `Subscription ${subscriber.subscriptionName} already exists.`,
        ),
      );
      return this.getSubscription(subscriber);
    }

    // topic should be created before subscriptions are created
    const topic = await this.createOrGetTopic(subscriber.topicName);
    // Creates a new subscription
    await topic.createSubscription(subscriber.subscriptionName);
    console.log(
      chalk.green(`Subscription ${subscriber.subscriptionName} created.`),
    );
    return this.getSubscription(subscriber);
  }

  private async subscriptionExists(subscriptionName: string): Promise<boolean> {
    const [subscriptionExists] = await this.getClient()
      .subscription(subscriptionName)
      .exists();
    return subscriptionExists;
  }

  protected getClient(): GooglePubSub {
    return this.client;
  }

  protected async createOrGetTopic(topicName: string): Promise<GCloudTopic> {
    const pubSubTopic = this.getClient().topic(topicName);
    const [topic] = await pubSubTopic.get({ autoCreate: true });
    return topic;
  }
}
