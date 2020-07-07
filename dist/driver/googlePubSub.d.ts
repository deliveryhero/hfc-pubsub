import { Topic, Payload } from '../index';
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
import { PubSub as GooglePubSub, Topic as GCloudTopic } from '@google-cloud/pubsub';
import { SubscriberTuple } from 'subscriber';
export default class GooglePubSubAdapter implements PubSubClientV2 {
    protected static instance: GooglePubSubAdapter;
    protected client: GooglePubSub;
    protected topics: Map<GCloudTopic['name'], GCloudTopic>;
    constructor(client: GooglePubSub);
    static getInstance(): GooglePubSubAdapter;
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: SubscriberTuple): Promise<void>;
    private addHandler;
    private log;
    private getSubscriberOptions;
    private createOrGetSubscription;
    private createSubscription;
    private getSubscription;
    private subscriptionExists;
    protected getClient(): GooglePubSub;
    protected createOrGetTopic(topicName: string): Promise<GCloudTopic>;
    getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
