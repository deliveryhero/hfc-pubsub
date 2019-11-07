// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Message } from '@google-cloud/pubsub';

interface SubscriptionConfig {
  topicName: string;
  subscriptionName: string;
  description?: string;
}

export default abstract class Subscription implements SubscriptionConfig {
  public topicName: string = '';
  public subscriptionName: string = '';
  public description: string = '';
  protected maxMessages = 1;

  /**
   * Acknowledge deadline in seconds. If left
   * unset the initial value will be 10 seconds, but it will evolve into the
   * 99th percentile time it takes to acknowledge a message
   */
  protected ackDeadlineSeconds: number = 10;

  public constructor() {
    this.handleMessage = this.handleMessage.bind(this);
  }

  public init(): void {}

  public async handleMessage(message: Message): Promise<void> {
    message;
  }
  public getMaxMessages(): number {
    return this.maxMessages;
  }
  public getAckDeadlineSeconds(): number {
    return this.ackDeadlineSeconds;
  }
  public getDescription(): string {
    return this.description;
  }
  public getTopicName(): string {
    return this.topicName;
  }
  public getSubscriptionName(): string {
    return this.subscriptionName;
  }
}
