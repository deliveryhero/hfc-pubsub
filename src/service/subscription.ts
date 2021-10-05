import { resolve } from 'path';
import {
  Subscribers,
  SubscriberObject,
  SubscriberTuple,
  SubscriberOptions,
} from '../subscriber';
import SubscriberLoader from './subscriberLoader';
import { ResourceResolver } from './resourceResolver';

export default class SubscriptionService {
  public static subscribers: SubscriberObject[] = [];
  private static _subscribers: Subscribers = [];

  public static defaultSubscriberOptions: SubscriberOptions;

  public static instance: SubscriptionService;

  public constructor() {
    SubscriptionService.instance = new SubscriptionService();
    this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
  }

  protected checkExistence(object: any, property: string): void {
    if (
      !object.hasOwnProperty(property) ||
      (object.hasOwnProperty(property) && object[property] == '')
    ) {
      throw new Error(
        `@honestfoodcompany/pubsub module requires ${property} to be defined in your .env`,
      );
    }
  }

  public static async init(): Promise<void> {
    //
  }

  /**
   * Call this function from a process exit handler to close all current subscriptions
   */
  public static async closeAll(): Promise<void> {
    //
  }

  public static getSubscribers(): Subscribers {
    if (SubscriptionService._subscribers.length > 0) {
      return SubscriptionService._subscribers as Subscribers;
    }
    SubscriptionService.loadSubscribers();

    return SubscriptionService._subscribers as Subscribers;
  }

  private static loadSubscribers(): Subscribers {
    const [subscriptionService, pubsubSubscriptionsDir] =
      ResourceResolver.getFiles();

    const subscriptionServiceClass =
      SubscriptionService.loadSubscriptionService();

    const loader = new SubscriberLoader();

    SubscriptionService._subscribers = this.mergeSubscribers(
      loader.loadSubscribersFromService(
        subscriptionService,
        subscriptionServiceClass.defaultSubscriberOptions,
      ),
      loader.loadSubscribersFromDirectory(
        pubsubSubscriptionsDir,
        subscriptionServiceClass.defaultSubscriberOptions,
      ),
    );

    return SubscriptionService._subscribers;
  }

  private static mergeSubscribers(
    subscribersFromService: Subscribers,
    subscribersFromDirectory: Subscribers,
  ): Subscribers {
    return Array.from(
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
  }

  public static loadSubscriptionService(): typeof SubscriptionService {
    const [subscriptionService] = ResourceResolver.getFiles();
    try {
      const service = require(resolve(subscriptionService)).default;
      return service;
    } catch (e) {
      return SubscriptionService;
    }
  }
}
