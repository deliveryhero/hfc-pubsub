import {
  Subscribers,
  SubscriberV1,
  SubscriberV2,
  SubscriberObject,
} from '../subscriber';
import PubSubService from './pubsub';
import { AllSubscriptions } from '../interface/pubSubClient';
import { resolve } from 'path';
import fs = require('fs');
import SubscriberLoader from './subscriberLoader';
import { ResourceResolver } from './resourceResolver';

export default class SubscriptionService {
  public static subscribers:
    | Subscribers
    | typeof SubscriberV1[]
    | typeof SubscriberV2[]
    | SubscriberObject[] = [];
  private static _subscribers: Subscribers = [];
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
    if (SubscriptionService._subscribers.length > 0) {
      return SubscriptionService._subscribers as Subscribers;
    }

    SubscriptionService.loadSubscribersFromFilesystem(
      ResourceResolver.getFiles(),
    );

    return SubscriptionService._subscribers as Subscribers;
  }

  private static loadSubscribersFromFilesystem([subscriptionService, dir]: [
    string,
    string,
  ]): Subscribers {
    const loader = new SubscriberLoader();
    if (fs.existsSync(subscriptionService)) {
      SubscriptionService._subscribers = loader.loadSubscribersFromService(
        subscriptionService,
      );
    } else {
      SubscriptionService._subscribers = loader.loadSubscribersFromDirectory(
        dir,
      );
    }
    return SubscriptionService._subscribers;
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
