import { resolve } from 'path';

export type SubscriptionServiceFile = string;
export type PubSubRootDirectory = string;

export class ResourceResolver {
  public static getFiles(): [SubscriptionServiceFile, PubSubRootDirectory] {
    const dir = resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
    const subscriptionService = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscription.service.js',
    );
    return [subscriptionService, dir];
  }
}
