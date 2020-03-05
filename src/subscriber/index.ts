// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Message from '../message';

export default class Subscriber {
  public static topicName: string = '';
  public static subscriptionName: string = '';
  public static description: string = '';
  public static maxMessages = 1;

  /**
   * Acknowledge deadline in seconds. If left
   * unset the initial value will be 10 seconds, but it will evolve into the
   * 99th percentile time it takes to acknowledge a message
   */
  public static ackDeadlineSeconds: number = 10;

  public constructor() {
    this.handleMessage = this.handleMessage.bind(this);
  }

  public init(): void {}

  public async handleMessage(message: Message): Promise<void> {
    message;
  }
}