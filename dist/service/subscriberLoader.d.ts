import { Subscribers, SubscriberTuple } from '../subscriber';
import { SubscriptionServiceFile } from './resourceResolver';
export default class SubscriberLoader {
    subscribers: Subscribers;
    constructor();
    loadSubscribersFromDirectory(dir: string): SubscriberTuple[];
    loadSubscribersFromService(subscriptionService: SubscriptionServiceFile, init?: boolean): Subscribers;
    private loadSubscriber;
}
