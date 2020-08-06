import Topic, { Payload } from '../topic';
import { SubscriberTuple, Subscribers } from '../subscriber';
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
import { RetryConfig } from '../interface/retryConfig';
export default class PubSubService {
    protected static client: PubSubClientV2;
    protected static instance: PubSubService;
    protected static driver: 'synchronous' | 'google';
    private static status;
    private constructor();
    private bind;
    private initDriver;
    private syncDriverIsEnabled;
    private initClient;
    static getInstance(): PubSubService;
    publish<T extends Topic, P extends Payload>(topic: T, message: P, retryConfig: RetryConfig): Promise<string>;
    private shouldStartSynchronousSubscriptions;
    private getClient;
    getSubscribers(): Subscribers;
    startSubscriptions(): Promise<void>;
    protected validate<T extends Topic, P extends Payload>(topic: T, message: P): void;
    subscribe(subscription: SubscriberTuple): Promise<void>;
    getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
