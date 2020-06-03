import Subscriber from '../subscriber';
import PubSubService from './pubsub';
import { AllSubscriptions } from '../interface/pubSubClient';
import { resolve } from 'path';
import fs = require('fs');
import { ClassLoader } from './classLoader';
import { ResourceResolver } from './resourceResolver';

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

  public static getSubscribers(): typeof Subscriber[] {
    if (SubscriptionService.subscribers.length > 0) {
      return SubscriptionService.subscribers;
    }

    SubscriptionService.loadSubscribersFromFilesystem(
      ResourceResolver.getFiles(),
    );

    SubscriptionService.validateSubscribers();
    return SubscriptionService.subscribers;
  }

  private static loadSubscribersFromFilesystem([
    subscriptionService,
    subscribersJson,
    dir,
  ]: [string, string, string]): typeof Subscriber[] {
    const loader = new ClassLoader();
    if (fs.existsSync(subscriptionService)) {
      this.subscribers = loader.loadSubscribersFromService(subscriptionService);
    } else if (fs.existsSync(subscribersJson)) {
      this.subscribers = loader.loadSubscribersFromJson(subscribersJson);
    } else {
      this.subscribers = loader.loadSubscribersFromDirectory(dir);
    }
    return this.subscribers;
  }

  public static loadSubscriptionService(): SubscriptionService {
    const [subscriptionService] = ResourceResolver.getFiles();
    const service = require(resolve(subscriptionService)).default;
    service.init();
    return service;
  }

  protected static validateSubscribers(): void {
    this.subscribers.forEach((subscriber: any): void => {
      if (typeof subscriber !== typeof Subscriber) {
        if (typeof subscriber === 'object') {
          Object.assign(new Subscriber(), subscriber);
        }
        throw Error('Each subscriber must extend the base Subscriber class');
      }
    });
  }

  public static async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    return PubSubService.getInstance().getAllSubscriptions();
  }
}
