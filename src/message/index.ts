import { Message as GCloudMessage } from '@google-cloud/pubsub';

export default class Message {
  public data: Buffer = Buffer.from('');
  public gCloudMessage?: GCloudMessage;

  public static from(message: any): Message {
    const instance = new Message();
    instance.data = Buffer.from(JSON.stringify(message));
    return instance;
  }

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
