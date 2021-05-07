import {
  SubscriberV2,
  Subscribers,
  SubscriberTuple,
  SubscriberV1,
} from '../subscriber';
import { resolve, join } from 'path';
import fs = require('fs');
import { SubscriptionServiceFile } from './resourceResolver';
import {
  SubscriberMetadata,
  SubscriberObject,
  SubscriberVersion,
  SubscriberOptions,
} from 'subscriber/subscriberV2';

const getSubscriberFiles = (
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
        acc.push(...getSubscriberFiles(join(dir, cur), `${nestedDir}/${cur}`));
      } else if (cur.match(/\.sub\.(j|t)s$/)) {
        acc.push({ nestedDir, fileName: cur });
      }
      return acc;
    }, []);
};

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
  public loadSubscribersFromDirectory(
    dir: string,
    defaultOptions: SubscriberOptions,
  ): Subscribers {
    const subscriberFiles = getSubscriberFiles(dir);
    const subscribers = [];

    for (const file of subscriberFiles) {
      const subscriber = require(join(dir, file.nestedDir, file.fileName))
        .default;
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

  public loadSubscribersFromService(
    subscriptionService: SubscriptionServiceFile,
    defaultOptions: SubscriberOptions,
  ): Subscribers {
    if (!fs.existsSync(subscriptionService)) return [];

    const subscribers = [];
    const service = require(resolve(subscriptionService)).default;
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
    subscriber: typeof SubscriberV1 | SubscriberObject,
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
}
