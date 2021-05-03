import { resolve, join } from 'path';

export type SubscriptionServiceFile = string;
export type PubSubRootDirectory = string;

export class ResourceResolver {
  public static getFiles(): [SubscriptionServiceFile, PubSubRootDirectory] {
    const rootDir = resolve(process.env.PUBSUB_ROOT_DIR || '');
    const dir = resolve(rootDir, 'subscriptions');
    const subscriptionService = require.resolve(
      join(rootDir, 'subscription.service'),
    );

    return [subscriptionService, dir];
  }
}
