import { SubscriptionService as BaseSubscriptionService } from '@honestfoodcompany/pubsub';
import TestSubscriptionFromServiceA from '../subscriptions/test.topic.subscription.goes-to-a';

export default class SubscriptionService extends BaseSubscriptionService {
  /**
   * if your subscribers don't have the .sub.js suffix
   * they won't be auto-loaded,  so you can include their default
   * export in  this array
   */
  public static subscribers = [TestSubscriptionFromServiceA];

  public static async init(): Promise<void> {
    // create your database connection here
  }
}
