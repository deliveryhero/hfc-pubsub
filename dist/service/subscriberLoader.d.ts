import { Subscribers } from '../subscriber';
import { SubscriptionServiceFile } from './resourceResolver';
import { SubscriberOptions } from 'subscriber/subscriberV2';
export default class SubscriberLoader {
    loadSubscribersFromDirectory(dir: string, defaultOptions: SubscriberOptions): Subscribers;
    loadSubscribersFromService(subscriptionService: SubscriptionServiceFile, defaultOptions: SubscriberOptions): Subscribers;
    private loadSubscriber;
}
