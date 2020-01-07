import Topic, { Payload } from '../topic';
import Subscriber from '../subscriber';
import PubSubClient from '../interface/pubSubClient';
export default class PubSubService {
    protected static client: PubSubClient;
    protected static instance: PubSubService;
    protected static driver: 'synchronous' | 'google';
    private static status;
    constructor();
    private bind;
    private initDriver;
    private syncDriverIsEnabled;
    private initClient;
    static getInstance(): PubSubService;
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    private shouldStartSynchronousSubscriptions;
    private getClient;
    getSubscribers(): (typeof Subscriber)[];
    startSubscriptions(): Promise<void>;
    protected validate<T extends Topic, P extends Payload>(topic: T, message: P): void;
    subscribe(subscription: typeof Subscriber): Promise<void>;
}
