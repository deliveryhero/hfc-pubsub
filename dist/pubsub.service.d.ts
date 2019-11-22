import { PubSub as GooglePubSub } from '@google-cloud/pubsub';
import Topic, { Payload } from './topic';
import Subscription from './subscription';
export default class PubSubService {
    protected client: GooglePubSub;
    protected static instance: PubSubService;
    constructor();
    static getInstance(): PubSubService;
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    protected getClient(): GooglePubSub;
    protected validate<T extends Topic, P extends Payload>(topic: T, message: P): void;
    subscribe(subscription: typeof Subscription): Promise<void>;
    protected createSubscription(topicName: string, subscriptionName: string): Promise<void>;
}
