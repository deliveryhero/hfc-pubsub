import EventEmitter from 'events';
import {
  AllSubscriptions,
  IsOpenTuple,
  PubSubClientV2,
} from '../interface/pubSubClient';
import Message from '../message';
import { Topic, Payload } from '../index';
import { SubscriberTuple } from '../subscriber';

export default class EventBus extends EventEmitter implements PubSubClientV2 {
  getAllSubscriptionsOpenState(): IsOpenTuple[] {
    throw new Error(
      'Not available for synchronous driver Please set env variable RUN_HEALTH_SERVER=false',
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

  public async publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): Promise<string> {
    EventBus.getInstance().emit(topic.getName(), message);
    return 'done';
  }

  public async subscribe(subscriber: SubscriberTuple): Promise<void> {
    const [subscriberClass, metadata] = subscriber;
    const instance = new subscriberClass();
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
}
