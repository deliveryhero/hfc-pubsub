import {
  SubscriberV2,
  Subscribers,
  SubscriberTuple,
  SubscriberV1,
} from '../subscriber';
import { resolve } from 'path';
import fs = require('fs');
import { SubscriptionServiceFile } from './resourceResolver';
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
  public loadSubscribersFromDirectory(
    dir: string,
    defaultOptions: SubscriberOptions,
  ): Subscribers {
    const subscriberFiles = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.sub\.(js|ts)$/);
      });
    const subscribers = [];

    for (const file of subscriberFiles) {
      const subscriber = require(resolve(dir, file)).default;
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
