import { Topic, Payload, Subscriber } from '../index';
import { SubscriberTuple } from '../subscriber';
import { PublishOptions } from './publishOptions';

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
  getAllSubscriptionsOpen(): Promise<IsOpenTuple>;
  //@todo: getAllTopics(): Promise<string[]>;
}
export type IsOpenTuple = [string, boolean];
export interface PubSubClientV2 {
  publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
    options: PublishOptions,
  ): Promise<string>;
  subscribe(subscriber: SubscriberTuple): void;
  close(subscriber: SubscriberTuple): void;
  getAllSubscriptions(): Promise<AllSubscriptions[]>;
  getAllSubscriptionsOpenState(): IsOpenTuple[];
  //@todo: getAllTopics(): Promise<string[]>;
}
