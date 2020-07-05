import Subscriber from './subscriber';
import Message from '../message';
import { SubscriberOptions } from '@google-cloud/pubsub/build/src/subscriber';
export declare type SubscriberVersion = 'v1' | 'v2' | 'v3';
export default class SubscriberV2 extends Subscriber {
    private subscriberObject?;
    metadata?: SubscriberMetadata;
    constructor(subscriberObject?: SubscriberObject | undefined);
    init(): Promise<void>;
    handleMessage(message: Message): Promise<void>;
    static from(subscriber: SubscriberObject | typeof Subscriber, version: SubscriberVersion): typeof SubscriberV2;
    static getSubscriberVersion(subscriber: unknown): SubscriberVersion;
}
export declare const ExampleSubscriber: SubscriberObject;
export interface SubscriberMetadata {
    topicName: string;
    subscriptionName: string;
    description?: string;
    options?: SubscriberOptions;
}
export interface MessageHandler {
    handleMessage: (message: Message) => void;
    init?: () => void;
}
export interface FlexibleObject {
    [key: string]: any;
}
export interface SubscriberObject extends SubscriberMetadata, MessageHandler, FlexibleObject {
}
