import { Topic, Payload, Subscriber } from '../index';
export default interface PubSubClient {
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: typeof Subscriber): void;
}
