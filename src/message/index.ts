import { Message as GCloudMessage } from '@google-cloud/pubsub';

export default class Message<T = unknown> {
  public data: Buffer = Buffer.from('');
  public gCloudMessage?: GCloudMessage;

  public toJSON(): T {
    return JSON.parse(this.data.toString());
  }
  /**
   * Builds a new message object in the synchronous driver.
   * Used by the eventBus.
   * @param message - any message that can be buffered
   */
  public static from<M>(message: M): Message<M> {
    const instance = new Message<M>();
    instance.data = Buffer.from(JSON.stringify(message));
    return instance;
  }

  /**
   * Builds a message for Google Cloud Driver
   * @param message A valid Google Cloud message
   */
  public static fromGCloud(message: GCloudMessage): Message {
    const instance = new Message();
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
