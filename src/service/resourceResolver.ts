import { resolve } from 'path';
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
}
