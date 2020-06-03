import { resolve } from 'path';

export type SubscriptionServiceFile = string;
export type SubscribersJsonFile = string;
export type PubSubRootDirectory = string;

export class ResourceResolver {
  public static getFiles(): [
    SubscriptionServiceFile,
    SubscribersJsonFile,
    PubSubRootDirectory,
  ] {
    const dir = resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
    const subscriptionService = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscription.service.js',
    );
    const subscribersJson = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscribers.json',
    );
    return [subscriptionService, subscribersJson, dir];
  }
}
