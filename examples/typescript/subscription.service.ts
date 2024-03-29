import {
  SubscriberObject,
  SubscriberOptions,
  SubscriptionService as BaseSubscriptionService,
} from '@honestfoodcompany/pubsub';
import SimpleTopicWithOptions from './subscriptions/simple.topic.console-log.subscription-with-options';

export default class SubscriptionService extends BaseSubscriptionService {
  /**
   * if your subscribers don't have the .sub.js suffix
   * they won't be auto-loaded,  so you can include their default
   * export in  this array
   */
  public static subscribers: SubscriberObject<any>[] = [SimpleTopicWithOptions];

  public static defaultSubscriberOptions: SubscriberOptions = {
    labels: {
      service: 'pubsub',
      env: 'local',
    },
  };

  public static async init(): Promise<void> {
    // create your database connection here
  }
}
