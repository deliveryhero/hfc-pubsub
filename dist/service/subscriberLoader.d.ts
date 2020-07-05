import { Subscribers } from '../subscriber';
import { SubscriptionServiceFile } from './resourceResolver';
export default class SubscriberLoader {
    private subscribers;
    loadSubscribersFromDirectory(dir: string): Subscribers;
    loadSubscribersFromService(subscriptionService: SubscriptionServiceFile, init?: boolean): Subscribers;
    private loadSubscriber;
}
