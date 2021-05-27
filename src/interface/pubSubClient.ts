import { Topic, Payload, Subscriber } from '../index';
import { SubscriberTuple } from '../subscriber';
import { RetryConfig } from './retryConfig';

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

export interface PubSubClientV2 {
  publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
    retryConfig: RetryConfig,
  ): Promise<string>;
  subscribe(subscriber: SubscriberTuple): void;
  getAllSubscriptions(): Promise<AllSubscriptions[]>;
  //@todo: getAllTopics(): Promise<string[]>;
}
