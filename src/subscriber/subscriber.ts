import Message from '../message';

/**
 * @deprecated
 */
export default class Subscriber {
  /**
   * @deprecated in favor of SubscriberV2.metadata.topicName
   */
  public static topicName: string;

  /**
   * @deprecated in favor of SubscriberV2.metadata.subscriptionName
   */
  public static subscriptionName: string;

  /**
   * @deprecated in favor of SubscriberV2.metadata.description
   */
  public static description: string;

  /**
   * @deprecated in favor of SubscriberV2.metadata.options.flowControl.maxMessages
   */
  public static maxMessages = 1;

  /**
   * Acknowledge deadline in seconds. If left
   * unset the initial value will be 10 seconds, but it will evolve into the
   * 99th percentile time it takes to acknowledge a message
   * @deprecated in favor of SubscriberV2.metadata.options.ackDeadlineSeconds
   */
  public static ackDeadlineSeconds = 10;

  /**
   * @deprecated
   */
  public constructor() {
    this.init = this.init.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  /**
   * @deprecated
   */
  public async init(): Promise<void> {
    //
  }

  /**
   * @deprecated
   */
  public async handleMessage(_message: Message): Promise<void> {
    //
  }

  /**
   * @deprecated
   */
  public handleError(_error: Error): void {
    //
  }
}
