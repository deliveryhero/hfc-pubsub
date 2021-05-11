import { resolve, join } from 'path';

export type SubscriptionServiceFile = string;
export type PubSubRootDirectory = string;

export class ResourceResolver {
  public static getFiles(): [SubscriptionServiceFile, PubSubRootDirectory] {
    const rootDir = resolve(process.env.PUBSUB_ROOT_DIR || '');
    const dir = resolve(rootDir, 'subscriptions');
    let subscriptionService;
    try {
      subscriptionService = require.resolve(
        join(rootDir, 'subscription.service'),
      );
    } catch (err) {
      // No module (either ts/js) exists at path. Default to js
      subscriptionService = join(rootDir, 'subscription.service.js');
    }
    return [subscriptionService, dir];
  }
}
