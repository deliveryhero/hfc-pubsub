import {
  SubscriberV2,
  Subscribers,
  SubscriberTuple,
  SubscriberV1,
} from '../subscriber';
import { resolve, join } from 'path';
import fs = require('fs');
import { SubscriptionServiceFile } from './resourceResolver';
import TypescriptLoader from './typescriptLoader';
import {
  SubscriberMetadata,
  SubscriberObject,
  SubscriberVersion,
  SubscriberOptions,
} from 'subscriber/subscriberV2';

/**
 * SubscriberLoader
 * This class is responsible for
 * 1. loading the subscribers from PUBSUB_ROOT_DIR/subscriptions with the .sub suffix
 * 2. loading the subscribers from PUBSUB_ROOT_DIR/subscription.service
 *
 * Given subscribers of different formats (class based subscribers, object based subscribers), the loading process
 * will convert each subscriber into a standard SubscriberV2 class and
 * return a tuple with the subscriber class and the subscriber metadata
 */
export default class SubscriberLoader {
  public async loadSubscribersFromDirectory(
    dir: string,
    defaultOptions: SubscriberOptions,
  ): Promise<Subscribers> {
    const subscriberFiles = this.getSubscriberFiles(dir);
    const subscribers = [];

    for (const file of subscriberFiles) {
      const subscriber = await TypescriptLoader.requireFile<
        typeof SubscriberV2 | typeof SubscriberV1 | SubscriberObject
      >(join(dir, file.nestedDir, file.fileName));
      subscribers.push(
        this.loadSubscriber(
          subscriber,
          SubscriberV2.getSubscriberVersion(subscriber),
          defaultOptions,
        ),
      );
    }
    return subscribers;
  }

  public async loadSubscribersFromService(
    subscriptionService: SubscriptionServiceFile,
    defaultOptions: SubscriberOptions,
  ): Promise<Subscribers> {
    if (!fs.existsSync(subscriptionService)) return [];

    const subscribers = [];
    const service = await TypescriptLoader.requireFile<{
      subscribers: [typeof SubscriberV1 | SubscriberObject];
    }>(resolve(subscriptionService));
    for (const subscriber of service.subscribers) {
      subscribers.push(
        this.loadSubscriber(
          subscriber,
          SubscriberV2.getSubscriberVersion(subscriber),
          defaultOptions,
        ),
      );
    }
    return subscribers;
  }

  private loadSubscriber(
    subscriber: typeof SubscriberV2 | typeof SubscriberV1 | SubscriberObject,
    version: SubscriberVersion,
    defaultOptions: SubscriberOptions,
  ): SubscriberTuple {
    const v2SubscriberClass = SubscriberV2.from(
      subscriber,
      version,
      defaultOptions,
    );
    const instance = new v2SubscriberClass();
    return [v2SubscriberClass, instance.metadata as SubscriberMetadata];
  }

  private getSubscriberFiles = (
    dir: string,
    nestedDir = '',
  ): { nestedDir: string; fileName: string }[] => {
    return fs
      .readdirSync(dir)
      .reduce((acc: { nestedDir: string; fileName: string }[], cur: string) => {
        if (
          fs.existsSync(join(dir, cur)) &&
          fs.lstatSync(join(dir, cur)).isDirectory()
        ) {
          acc.push(
            ...this.getSubscriberFiles(join(dir, cur), `${nestedDir}/${cur}`),
          );
        } else if (cur.match(/\.sub\.(j|t)s$/)) {
          acc.push({ nestedDir, fileName: cur });
        }
        return acc;
      }, []);
  };
}
