/// <reference types="node" />
import EventEmitter from 'events';
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
import { Topic, Payload } from '../index';
import { SubscriberTuple } from 'subscriber';
export default class EventBus extends EventEmitter implements PubSubClientV2 {
    protected static instance: EventBus;
    protected static status: 'pending' | 'ready';
    static getInstance(): EventBus;
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: SubscriberTuple): Promise<void>;
    getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
