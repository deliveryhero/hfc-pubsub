import Subscriber from '../subscriber';
import { resolve } from 'path';
import fs = require('fs');
import {
  SubscriptionServiceFile,
  SubscribersJsonFile,
} from './resourceResolver';

export class ClassLoader {
  private subscribers: typeof Subscriber[] = [];

  public loadSubscribersFromDirectory(dir: string): typeof Subscriber[] {
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
  ): typeof Subscriber[] {
    const service = require(resolve(subscriptionService)).default;
    if (init) service.init();
    service.subscribers.forEach((subscription: typeof Subscriber): void => {
      this.subscribers.push(subscription);
    });
    return this.subscribers;
  }

  public loadSubscribersFromJson(
    jsonFile: SubscribersJsonFile,
  ): typeof Subscriber[] {
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
      this.subscribers.push(subscription);
    });
    return this.subscribers;
  }
}
