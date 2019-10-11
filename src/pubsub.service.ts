import { PubSub as GooglePubSub } from "@google-cloud/pubsub";
import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Topic, { Payload } from "./topic";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Subscription from "./subscription";

/**
 * Connects to GCP PubSub to publish and subscribe to messages.
 * See: https://github.com/googleapis/nodejs-pubsub
 */
export default class PubSubService {
  protected client: GooglePubSub;
  protected static instance: PubSubService;

  public constructor() {
    if (
      !process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID ||
      !process.env.GOOGLE_APPLICATION_CREDENTIALS
    ) {
      throw new Error(
        "Missing value for env variable GOOGLE_CLOUD_PUB_SUB_PROJECT_ID / GOOGLE_APPLICATION_CREDENTIALS",
      );
    }
    this.client = new GooglePubSub({ projectId: process.env.GCLOUD_PROJECT });

    this.createSubscription = this.createSubscription.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  public static getInstance(): PubSubService {
    if (!PubSubService.instance) {
      PubSubService.instance = new PubSubService();
    }
    return PubSubService.instance;
  }

  /**
   * Publishes new orders to PubSub.
   */
  public async publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): Promise<string> {
    this.validate(topic, message);

    // Instantiates a client
    const pubSubTopic = await this.getClient().topic(topic.getName());

    // Create topic if it does not exist yet
    pubSubTopic.get({ autoCreate: true });
    let messageId = await pubSubTopic.publish(
      Buffer.from(JSON.stringify(message)),
    );
    return messageId;
  }

  protected getClient(): GooglePubSub {
    return this.client;
  }

  /**
   * Validates Topic and Message according to validation rules set in Topic class
   * @param topic Topic
   * @param message Message
   */
  protected validate<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): void {
    topic.validateTopic(topic.getName());
    topic.validateMessage(message);
  }

  /**
   * Subscribes to any given topic with FlowControlSettings.
   */
  public async subscribe(subscription: Subscription): Promise<void> {
    await this.createSubscription(
      subscription.getTopicName(),
      subscription.getSubscriptionName(),
    );

    const subscriberOptions = {
      ackDeadline: subscription.getAckDeadlineSeconds(),
      flowControl: {
        maxMessages: subscription.getMaxMessages(),
      },
    };

    // References an existing subscription.
    // Note that flow control settings are not persistent across subscribers.
    const gcloudSubscription = this.client.subscription(
      subscription.getSubscriptionName(),
      subscriberOptions,
    );

    console.log(
      chalk.green.bold(
        `   📭     ${subscription.getSubscriptionName()} is ready to receive messages at a controlled volume of ${subscription.getMaxMessages()} messages.`,
      ),
    );

    gcloudSubscription.on(`message`, subscription.handleMessage);
  }

  /**
   * Create subscription if it does not exist yet.
   */
  protected async createSubscription(
    topicName: string,
    subscriptionName: string,
  ): Promise<void> {
    const pubSubTopic = this.getClient().topic(topicName);
    // Create topic if it does not exist yet
    await pubSubTopic.get({ autoCreate: true });
    // Check if subscription already exists
    const subscription = pubSubTopic.subscription(subscriptionName);
    const response = await subscription.exists();

    if (response[0]) {
      console.log(
        chalk.gray(`Subscription ${subscriptionName} already exists.`),
      );
      return;
    }

    // Creates a new subscription
    await pubSubTopic.createSubscription(subscriptionName);
    console.log(chalk.green(`Subscription ${subscriptionName} created.`));
  }
}
