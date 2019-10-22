import Subscription from "./subscription";
export default class SubscriptionService {
    static subscriptions: (Subscription | null)[];
    static instance: SubscriptionService;
    constructor();
    protected checkExistence(object: {}, property: string): void;
    static init(): Promise<void>;
    static start(mongooseConnection?: any): void;
    static getSubscriptions(init?: boolean): Subscription[];
    protected static validateSubscriptions(): void;
    protected static loadSubscriptionsFromDirectory(dir: string): void;
    protected static loadSubscriptionsFromService(subscriptionService: string, init?: boolean): void;
    protected static loadSubscriptionsFromJson(jsonFile: string): void;
}
