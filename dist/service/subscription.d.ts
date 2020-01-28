import Subscriber from '../subscriber';
import { AllSubscriptions } from '../interface/pubSubClient';
export default class SubscriptionService {
    static subscribers: typeof Subscriber[];
    static instance: SubscriptionService;
    constructor();
    protected checkExistence(object: any, property: string): void;
    static init(): Promise<void>;
    static getSubscribers(): (typeof Subscriber)[];
    private static loadSubscribersFromLocations;
    static loadSubscriptionService(): SubscriptionService;
    protected static getSubscriptionLocations(): [string, string, string];
    protected static validateSubscribers(): void;
    protected static loadSubscribersFromDirectory(dir: string): void;
    protected static loadSubscribersFromService(subscriptionService: string, init?: boolean): void;
    protected static loadSubscribersFromJson(jsonFile: string): void;
    static getAllSubscriptions(): Promise<AllSubscriptions[]>;
}
