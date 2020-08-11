import { Subscribers } from '../subscriber';
import { SubscriptionServiceFile } from './resourceResolver';
import { SubscriberOptions } from 'subscriber/subscriberV2';
export default class SubscriberLoader {
    private subscribers;
    loadSubscribersFromDirectory(dir: string, defaultOptions: SubscriberOptions): Subscribers;
    loadSubscribersFromService(subscriptionService: SubscriptionServiceFile, init: boolean | undefined, defaultOptions: SubscriberOptions): Subscribers;
    private loadSubscriber;
}
