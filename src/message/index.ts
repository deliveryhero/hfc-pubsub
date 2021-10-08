import { Message as GCloudMessage } from '@google-cloud/pubsub';

export default class Message<T = any> {
  public data: Buffer = Buffer.from('');
  public gCloudMessage?: GCloudMessage;
  public json: T = '' as unknown as T;
  /**
   * Builds a new message object in the synchronous driver.
   * Used by the eventBus.
   * @param message - any message that can be buffered
   */
  public static from<U>(message: any): Message<U> {
    const instance = new Message<U>();
    instance.data = Buffer.from(JSON.stringify(message));
    try {
      instance.json = JSON.parse(message.toString());
    } catch {
      instance.json = '' as unknown as U;
    }
    return instance;
  }

  /**
   * Builds a message for Google Cloud Driver
   * @param message A valid Google Cloud message
   */
  public static fromGCloud<U>(message: GCloudMessage): Message<U> {
    // Static member can't access class argument so keeping it any
    const instance = new Message<U>();
    instance.data = message.data;
    try {
      instance.json = JSON.parse(message.data.toString());
    } catch {
      instance.json = '' as unknown as U;
    }
    instance.data = message.data;
    instance.gCloudMessage = message;
    return instance;
  }

  public ack(): void {
    if (this.gCloudMessage) {
      this.gCloudMessage.ack();
    }
  }

  public modAck(deadline: number): void {
    if (this.gCloudMessage) {
      this.gCloudMessage.modAck(deadline);
    }
  }

  public nack(): void {
    if (this.gCloudMessage) {
      this.gCloudMessage.nack();
    }
  }
}
