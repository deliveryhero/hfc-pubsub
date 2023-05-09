import { TopicProperties } from '../topic';
import { SubscriberTuple } from '../subscriber';
import { PublishOptions } from './publishOptions';

export interface AllSubscriptions {
  topicName: string | null | undefined;
  subscriptionName: string;
}

export type IsOpenTuple = [string, boolean];

export interface PubSubClientV2 {
  publish<T extends TopicProperties>(
    topic: T,
    message: Record<string, unknown> | string,
    options?: PublishOptions,
  ): Promise<string>;
  subscribe(subscriber: SubscriberTuple): void;
  close(subscriber: SubscriberTuple): void;
  getAllSubscriptions(): Promise<AllSubscriptions[]>;
  getAllSubscriptionsState(): IsOpenTuple[];

  compressMessage(message: Record<string, unknown>): Uint8Array;
  //@todo: getAllTopics(): Promise<string[]>;
}
