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
} from 'subscriber/subscriberV2';

export default class SubscriberLoader {
  private subscribers: Subscribers = [];

  public loadSubscribersFromDirectory(dir: string): Subscribers {
    const subscribers = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.sub\.js$/);
      });
    for (const file of subscribers) {
      const subscriber = require(resolve(dir, file)).default;
      const version = SubscriberV2.getSubscriberVersion(subscriber) || '';
      this.subscribers.push(this.loadSubscriber(subscriber, version));
    }
    return this.subscribers;
  }

  public loadSubscribersFromService(
    subscriptionService: SubscriptionServiceFile,
    init = false,
  ): Subscribers {
    const service = require(resolve(subscriptionService)).default;
    if (init) service.init();
    service.subscribers.map(
      (
        subscriber:
          | typeof SubscriberV1
          | typeof SubscriberV2
          | SubscriberObject,
      ): void => {
        const version = SubscriberV2.getSubscriberVersion(subscriber) || '';
        this.subscribers.push(this.loadSubscriber(subscriber, version));
      },
    );
    return this.subscribers;
  }

  private loadSubscriber(
    subscriber: typeof SubscriberV1 | SubscriberObject,
    version: SubscriberVersion,
  ): SubscriberTuple {
    switch (version) {
      case 'v1': {
        // v1 is getting an upgrade to v2
        const v2SubscriberClass = SubscriberV2.from(subscriber, 'v1');
        const instance = new v2SubscriberClass();
        return [v2SubscriberClass, instance.metadata as SubscriberMetadata];
      }
      case 'v2': {
        const v2SubscriberClass = SubscriberV2.from(subscriber, 'v2');
        const instance = new v2SubscriberClass();
        return [v2SubscriberClass, instance.metadata as SubscriberMetadata];
      }
      case 'v3':
        // let's convert a subscriber object to subscriber class
        const v2SubscriberClass = SubscriberV2.from(subscriber, 'v3');
        const instance = new v2SubscriberClass();
        return [v2SubscriberClass, instance.metadata as SubscriberMetadata];
    }
  }
}
