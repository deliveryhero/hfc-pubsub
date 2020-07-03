import Subscriber, {
  SubscriberV2,
  Subscribers,
  SubscriberTuple,
} from '../subscriber';
import { resolve } from 'path';
import fs = require('fs');
import {
  SubscriptionServiceFile,
  SubscribersJsonFile,
} from './resourceResolver';
import {
  SubscriberMetadata,
  SubscriberObject,
  SubscriberVersion,
} from 'subscriber/subscriberV2';

export default class SubscriberLoader {
  public subscribers?: Subscribers;

  public loadSubscribersFromDirectory(dir: string): SubscriberTuple[] {
    const subscriptionFiles = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.js$/);
      });
    for (const file of subscriptionFiles) {
      const subscription = require(resolve(dir, file)).default;
      this.subscribers?.push(subscription);
    }
    return this.subscribers || [];
  }
  public loadSubscribersFromService(
    subscriptionService: SubscriptionServiceFile,
    init = false,
  ): SubscriberTuple[] {
    const service = require(resolve(subscriptionService)).default;
    if (init) service.init();
    service.subscribers.map(
      (subscriber: typeof Subscriber | SubscriberObject): void => {
        const version = SubscriberV2.getSubscriberVersion(subscriber) || '';
        this.subscribers?.push(this.loadSubscriber(subscriber, version));
      },
    );
    return this.subscribers || [];
  }

  private loadSubscriber(
    subscriber: typeof Subscriber | SubscriberObject,
    version: SubscriberVersion,
  ): SubscriberTuple {
    switch (version) {
      case 'v1': {
        // v1 is getting an upgrade to v2
        const v2Subscriber = SubscriberV2.from(subscriber, 'v1');
        return [
          v2Subscriber,
          new v2Subscriber().metadata as SubscriberMetadata,
        ];
      }
      case 'v2': {
        const v2Subscriber = SubscriberV2.from(subscriber, 'v2');
        return [
          v2Subscriber,
          new v2Subscriber().metadata as SubscriberMetadata,
        ];
      }
      case 'v3':
        // let's convert a subscriber object to subscriber class
        const v2Subscriber = SubscriberV2.from(subscriber, 'v3');
        return [
          v2Subscriber,
          new v2Subscriber().metadata as SubscriberMetadata,
        ];
    }
  }

  public loadSubscribersFromJson(
    jsonFile: SubscribersJsonFile,
  ): SubscriberTuple[] {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const subscribersFile = require(jsonFile);
    if (typeof subscribersFile.subscribers == 'undefined') {
      throw Error(
        'subscribers.json is invalid. Make sure that subscribers key is defined',
      );
    }
    const subscribers = subscribersFile.subscribers;
    Object.keys(subscribers).forEach((key): void => {
      const pathToSubscribers = resolve(
        process.env.PUBSUB_ROOT_DIR || '',
        'subscriptions',
        `${subscribers[key]}.js`,
      );
      if (!fs.existsSync(pathToSubscribers)) {
        console.log(`Could not find subscription: ${subscribers[key]}.js`);
        return;
      }
      const subscription = require(pathToSubscribers).default;
      this.subscribers?.push(subscription);
    });
    return this.subscribers || [];
  }
}
