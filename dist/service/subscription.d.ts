import { Subscribers, SubscriberV1, SubscriberV2, SubscriberObject } from '../subscriber';
export default class SubscriptionService {
    static subscribers: (typeof SubscriberV1 | typeof SubscriberV2 | SubscriberObject)[];
    private static _subscribers;
    private static defaultSubscriberOptions;
    static instance: SubscriptionService;
    constructor();
    protected checkExistence(object: any, property: string): void;
    static init(): Promise<void>;
    static getSubscribers(): Subscribers;
    private static loadSubscribers;
    private static mergeSubscribers;
    static loadSubscriptionService(): typeof SubscriptionService;
}
