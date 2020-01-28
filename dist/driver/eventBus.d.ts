/// <reference types="node" />
import EventEmitter from 'events';
import PubSubClient, { AllSubscriptions } from '../interface/pubSubClient';
import { Topic, Payload, Subscriber } from '../index';
export default class EventBus extends EventEmitter implements PubSubClient {
    protected static instance: EventBus;
    protected static status: 'pending' | 'ready';
    static getInstance(): EventBus;
    publish<T extends Topic, P extends Payload>(topic: T, message: P): Promise<string>;
    subscribe(subscriber: typeof Subscriber): Promise<void>;
    getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
