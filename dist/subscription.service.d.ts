import Subscription from './subscription';
import PubSubService from './pubsub.service';
export default class SubscriptionService {
    static subscriptions: typeof Subscription[];
    static instance: SubscriptionService;
    static pubSubService: PubSubService;
    constructor();
    protected checkExistence(object: any, property: string): void;
    static init(): Promise<void>;
    static start(): void;
    static getSubscriptions(init?: boolean, returnInstances?: boolean): (typeof Subscription)[] | Subscription[];
    protected static validateSubscriptions(): void;
    protected static loadSubscriptionsFromDirectory(dir: string): void;
    protected static loadSubscriptionsFromService(subscriptionService: string, init?: boolean): void;
    protected static loadSubscriptionsFromJson(jsonFile: string): void;
}
