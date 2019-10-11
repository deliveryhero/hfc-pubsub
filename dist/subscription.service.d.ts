import Subscription from "./subscription";
export default class SubscriptionService {
    static subscriptions: (Subscription | null)[];
    static instance: SubscriptionService;
    constructor();
    protected checkExistence(object: any, property: any): void;
    static start(mongooseConnection?: any): void;
    static getSubscriptions(): Subscription[];
    protected static validateSubscriptions(): void;
    protected static loadSubscriptionsFromDirectory(dir: any): void;
    protected static loadSubscriptionsFromService(subscriptionService: any): void;
    protected static loadSubscriptionsFromJson(jsonFile: any): void;
}
