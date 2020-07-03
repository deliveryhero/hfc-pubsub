import { Subscribers } from '../subscriber';
import PubSubService from './pubsub';
import { AllSubscriptions } from '../interface/pubSubClient';
import { resolve } from 'path';
import fs = require('fs');
import SubscriberLoader from './subscriberLoader';
import { ResourceResolver } from './resourceResolver';

export default class SubscriptionService {
  public static subscribers: Subscribers;
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

  public static getSubscribers(): Subscribers {
    if (SubscriptionService.subscribers.length > 0) {
      return SubscriptionService.subscribers;
    }

    SubscriptionService.loadSubscribersFromFilesystem(
      ResourceResolver.getFiles(),
    );

    return SubscriptionService.subscribers;
  }

  private static loadSubscribersFromFilesystem([
    subscriptionService,
    subscribersJson,
    dir,
  ]: [string, string, string]): Subscribers {
    const loader = new SubscriberLoader();
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

  public static async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    return PubSubService.getInstance().getAllSubscriptions();
  }
}
