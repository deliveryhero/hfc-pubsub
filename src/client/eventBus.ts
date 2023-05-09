import EventEmitter from 'events';
import Pako from 'pako';
import { PublishOptions } from '../interface/publishOptions';
import {
  AllSubscriptions,
  IsOpenTuple,
  PubSubClientV2,
} from '../interface/pubSubClient';
import Message from '../message';
import { TopicProperties } from '../topic';
import { SubscriberTuple } from '../subscriber';

export default class EventBus extends EventEmitter implements PubSubClientV2 {
  getAllSubscriptionsState(): IsOpenTuple[] {
    throw new Error(
      'Not available for synchronous driver Please set env variable PUBSUB_HEALTH_SERVER=false',
    );
  }
  protected static instance: EventBus;
  protected static status: 'pending' | 'ready' = 'pending';

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  public async publish<T extends TopicProperties>(
    topic: T,
    message: Record<string, unknown>,
    options?: PublishOptions,
  ): Promise<string> {
    let msg: Record<string, unknown> | Uint8Array = message;
    if (options?.enableGZipCompression) {
      msg = this.compressMessage(message);
    }

    EventBus.getInstance().emit(topic.topicName, msg);
    return 'done';
  }

  public async subscribe(subscriber: SubscriberTuple): Promise<void> {
    const [instance, metadata] = subscriber;
    await instance.init();
    EventBus.getInstance().addListener(
      metadata.topicName,
      (message: Message): Promise<void> => {
        return instance.handleMessage(Message.from(message));
      },
    );
  }

  public async close(subscriber: SubscriberTuple): Promise<void> {
    const [, metadata] = subscriber;
    EventBus.getInstance().removeAllListeners(metadata.topicName);
  }

  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    throw new Error(
      'This feature is not available with the synchronous driver',
    );
  }

  public compressMessage(message: Record<string, unknown>): Uint8Array {
    return Pako.gzip(JSON.stringify(message));
  }
}
