import { resolve, join } from 'path';
import { existsSync } from 'fs';

export type SubscriptionServiceFile = string;
export type PubSubRootDirectory = string;

export class ResourceResolver {
  public static getFiles(): [SubscriptionServiceFile, PubSubRootDirectory] {
    const dir = resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
    const subscriptionService = ResourceResolver.getSubscriptionService();
    return [subscriptionService, dir];
  }

  public static getSubscriptionService(): string {
    const subscriptionServiceTsPath = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscription.service.ts',
    );

    return existsSync(subscriptionServiceTsPath)
      ? subscriptionServiceTsPath
      : resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscription.service.js');
  }

  public static findCacheFolder(): string {
    let cacheDirectory = resolve(process.env.PUBSUB_ROOT_DIR || '');
    while (!existsSync(join(cacheDirectory, 'node_modules'))) {
      cacheDirectory = join(cacheDirectory, '..');
    }

    return join(cacheDirectory, 'node_modules', 'ts-import', 'cache');
  }
}
