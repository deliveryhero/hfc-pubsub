import Subscriber from '../subscriber';
import PubSubService from './pubsub';
import { AllSubscriptions } from '../interface/pubSubClient';
import { resolve } from 'path';
import fs = require('fs');

export default class SubscriptionService {
  public static subscribers: typeof Subscriber[] = [];
  public static instance = new SubscriptionService();
  public constructor() {
    this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
  }

  protected checkExistence(object: any, property: string): void {
    if (
      !object.hasOwnProperty(property) ||
      (object.hasOwnProperty(property) && object[property] == '')
    ) {
      console.warn(
        `@honestfoodcompany/pubsub module requires ${property} to be defined in your .env`,
      );
    }
  }

  public static async init(): Promise<void> {}

  public static getSubscribers(): (typeof Subscriber)[] {
    if (SubscriptionService.subscribers.length > 0) {
      return SubscriptionService.subscribers;
    }

    SubscriptionService.loadSubscribersFromLocations(
      SubscriptionService.getSubscriptionLocations(),
    );

    SubscriptionService.validateSubscribers();
    return SubscriptionService.subscribers;
  }

  private static loadSubscribersFromLocations([
    subscriptionService,
    subscribersJson,
    dir,
  ]: [string, string, string]): void {
    if (fs.existsSync(subscriptionService)) {
      SubscriptionService.loadSubscribersFromService(subscriptionService);
    } else if (fs.existsSync(subscribersJson)) {
      SubscriptionService.loadSubscribersFromJson(subscribersJson);
    } else {
      SubscriptionService.loadSubscribersFromDirectory(dir);
    }
  }
  public static loadSubscriptionService(): SubscriptionService {
    const [subscriptionService] = this.getSubscriptionLocations();
    const service = require(resolve(subscriptionService)).default;
    service.init();
    return service;
  }

  protected static getSubscriptionLocations(): [string, string, string] {
    const dir = resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
    const subscriptionService = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscription.service.js',
    );
    const subscribersJson = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscribers.json',
    );
    return [subscriptionService, subscribersJson, dir];
  }

  protected static validateSubscribers(): void {
    this.subscribers.forEach((subscriber: any): void => {
      if (typeof subscriber !== typeof Subscriber) {
        throw Error(
          'Each subscription must extend the base Subscription class',
        );
      }
    });
  }

  protected static loadSubscribersFromDirectory(dir: string): void {
    const subscriptionFiles = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.js$/);
      });
    for (let file of subscriptionFiles) {
      let subscription = require(resolve(dir, file)).default;
      this.subscribers.push(subscription);
    }
  }

  protected static loadSubscribersFromService(
    subscriptionService: string,
    init: boolean = false,
  ): void {
    const service = require(resolve(subscriptionService)).default;
    if (init) service.init();
    service.subscribers.forEach((subscription: typeof Subscriber): void => {
      this.subscribers.push(subscription);
    });
  }

  protected static loadSubscribersFromJson(jsonFile: string): void {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const subscribersFile = require(jsonFile);
    if (typeof subscribersFile.subscribers == 'undefined') {
      throw Error(
        'subscribers.json is invalid. Make sure that subscribers key is defined',
      );
    }
    const subscribers = subscribersFile.subscribers;
    Object.keys(subscribers).forEach((key): void => {
      let pathToSubscribers = resolve(
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
  }

  public static async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    const pubSubService = new PubSubService();
    return pubSubService.getAllSubscriptions();
  }
}

