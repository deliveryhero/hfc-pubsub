import EventEmitter from 'events';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PubSubClient, {
  AllSubscriptions,
  PubSubClientV2,
} from '../interface/pubSubClient';
import Message from '../message';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Topic, Payload } from '../index';
import { SubscriberTuple } from 'subscriber';

export default class EventBus extends EventEmitter implements PubSubClientV2 {
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
    EventBus.getInstance().addListener(
      metadata.topicName,
      async (message: Message): Promise<void> => {
        const instance = new subscriberClass();
        instance.init();
        await instance.handleMessage(Message.from(message));
      },
    );
  }

  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    throw new Error(
      'This feature is not available with the synchronous driver',
    );
  }
}
