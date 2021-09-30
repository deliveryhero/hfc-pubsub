import { Topic, Payload } from '../index';
import { SubscriberTuple } from '../subscriber';
import { PublishOptions } from './publishOptions';

export interface AllSubscriptions {
  topicName: string | null | undefined;
  subscriptionName: string;
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
  getAllSubscriptionsState(): IsOpenTuple[];
  //@todo: getAllTopics(): Promise<string[]>;
}
