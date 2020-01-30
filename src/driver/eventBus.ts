
import EventEmitter  from 'events';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PubSubClient, { AllSubscriptions } from '../interface/pubSubClient';
import Message from '../message';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Topic, Payload, Subscriber } from '../index';

export default class EventBus extends EventEmitter implements PubSubClient {
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
  public async subscribe(subscriber: typeof Subscriber): Promise<void> {
    EventBus.getInstance().addListener(
      subscriber.topicName,
      async (message: Message): Promise<void> => {
        const instance = new subscriber();
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
