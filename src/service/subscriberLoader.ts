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
  public subscribers: Subscribers = [];
  public constructor() {
    this.subscribers = [];
  }

  public loadSubscribersFromDirectory(dir: string): SubscriberTuple[] {
    const subscriptionFiles = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.js$/);
      });
    for (const file of subscriptionFiles) {
      const subscription = require(resolve(dir, file)).default;
      this.subscribers.push(subscription);
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
