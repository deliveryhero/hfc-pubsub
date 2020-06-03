// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Topic, Payload, Subscriber } from '../index';

export interface AllSubscriptions {
  topicName: string | null | undefined;
  subscriptionName: string;
}

export default interface PubSubClient {
  publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): Promise<string>;
  subscribe(subscriber: typeof Subscriber): void;
  getAllSubscriptions(): Promise<AllSubscriptions[]>;
  //@todo: getAllTopics(): Promise<string[]>;
}
