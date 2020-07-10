import { Topic, Payload, Subscriber } from '../index';
import { SubscriberTuple } from '../subscriber';
export interface AllSubscriptions {
    topicName: string | null | undefined;
    subscriptionName: string;
}
export default interface PubSubClient {
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: typeof Subscriber): void;
    getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
export interface PubSubClientV2 {
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: SubscriberTuple): void;
    getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
