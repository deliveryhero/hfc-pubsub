import PubSubClient from '../interface/pubSubClient';
import { Topic, Payload, Subscriber } from '../index';
import { PubSub as GooglePubSub, Topic as GCloudTopic } from '@google-cloud/pubsub';
export default class GooglePubSubAdapter implements PubSubClient {
    protected static instance: GooglePubSubAdapter;
    protected client: GooglePubSub;
    constructor(client: GooglePubSub);
    static getInstance(): GooglePubSubAdapter;
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: typeof Subscriber): Promise<void>;
    private addHandler;
    private getSubscription;
    private log;
    private getSubscriberOptions;
    private createOrGetSubscription;
    private subscriptionExists;
    protected getClient(): GooglePubSub;
    protected createOrGetTopic(topicName: string): Promise<GCloudTopic>;
}
