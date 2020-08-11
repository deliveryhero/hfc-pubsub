import { Subscribers, SubscriberV1, SubscriberV2, SubscriberObject } from '../subscriber';
import { AllSubscriptions } from '../interface/pubSubClient';
export default class SubscriptionService {
    static subscribers: (typeof SubscriberV1 | typeof SubscriberV2 | SubscriberObject)[];
    private static _subscribers;
    private static defaultSubscriberOptions;
    static instance: SubscriptionService;
    constructor();
    protected checkExistence(object: any, property: string): void;
    static init(): Promise<void>;
    static getSubscribers(): Subscribers;
    private static loadSubscribersFromFilesystem;
    static loadSubscriptionService(): typeof SubscriptionService;
    static getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
