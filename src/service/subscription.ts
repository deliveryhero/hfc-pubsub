import {
  Subscribers,
  SubscriberV1,
  SubscriberV2,
  SubscriberObject,
  SubscriberTuple,
} from '../subscriber';
import PubSubService from './pubsub';
import { AllSubscriptions } from '../interface/pubSubClient';
import { resolve } from 'path';
import fs = require('fs');
import SubscriberLoader from './subscriberLoader';
import { ResourceResolver } from './resourceResolver';

export default class SubscriptionService {
  public static subscribers: (
    | typeof SubscriberV1
    | typeof SubscriberV2
    | SubscriberObject
  )[] = [];
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
    const subscribersFromService = fs.existsSync(subscriptionService)
      ? loader.loadSubscribersFromService(subscriptionService)
      : [];

    const subscribersFromDirectory = loader.loadSubscribersFromDirectory(dir);

    SubscriptionService._subscribers = Array.from(
      subscribersFromService
        .concat(subscribersFromDirectory)
        .reduce((map, subscriber) => {
          const subscriptionKey =
            subscriber[1].topicName + subscriber[1].subscriptionName;
          map.set(subscriptionKey, subscriber);
          return map;
        }, new Map<string, SubscriberTuple>())
        .values(),
    );

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
