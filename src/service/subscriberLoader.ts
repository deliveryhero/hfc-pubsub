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

export default class SubscriberLoader {
  private subscribers: Subscribers = [];

  public loadSubscribersFromDirectory(
    dir: string,
    defaultOptions: SubscriberOptions,
  ): Subscribers {
    const subscribers = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.sub\.js$/);
      });
    for (const file of subscribers) {
      const subscriber = require(resolve(dir, file)).default;
      const version = SubscriberV2.getSubscriberVersion(subscriber) || '';
      this.subscribers.push(
        this.loadSubscriber(subscriber, version, defaultOptions),
      );
    }
    return this.subscribers;
  }

  public loadSubscribersFromService(
    subscriptionService: SubscriptionServiceFile,
    defaultOptions: SubscriberOptions,
  ): Subscribers {
    if (!fs.existsSync(subscriptionService)) return [];

    const service = require(resolve(subscriptionService)).default;
    this.subscribers = service.subscribers.map(
      (
        subscriber:
          | typeof SubscriberV1
          | typeof SubscriberV2
          | SubscriberObject,
      ): SubscriberTuple =>
        this.loadSubscriber(
          subscriber,
          SubscriberV2.getSubscriberVersion(subscriber),
          defaultOptions,
        ),
    );
    return this.subscribers;
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
