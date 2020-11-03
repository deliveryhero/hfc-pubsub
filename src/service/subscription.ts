import {
  Subscribers,
  SubscriberV1,
  SubscriberV2,
  SubscriberObject,
  SubscriberTuple,
  SubscriberOptions,
} from '../subscriber';
import { resolve } from 'path';
import SubscriberLoader from './subscriberLoader';
import { ResourceResolver } from './resourceResolver';
import TypescriptLoader from './typescriptLoader';

export default class SubscriptionService {
  public static subscribers: (
    | typeof SubscriberV1
    | typeof SubscriberV2
    | SubscriberObject
  )[] = [];
  private static _subscribers: Subscribers = [];

  public static defaultSubscriberOptions: SubscriberOptions;

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

  public static async getSubscribers(): Promise<Subscribers> {
    if (SubscriptionService._subscribers.length > 0) {
      return SubscriptionService._subscribers as Subscribers;
    }
    await SubscriptionService.loadSubscribers();

    return SubscriptionService._subscribers as Subscribers;
  }

  private static async loadSubscribers(): Promise<Subscribers> {
    const [
      subscriptionService,
      pubsubSubscriptionsDir,
    ] = ResourceResolver.getFiles();

    const subscriptionServiceClass = await SubscriptionService.loadSubscriptionService();

    const loader = new SubscriberLoader();

    SubscriptionService._subscribers = this.mergeSubscribers(
      await loader.loadSubscribersFromService(
        subscriptionService,
        subscriptionServiceClass.defaultSubscriberOptions,
      ),
      await loader.loadSubscribersFromDirectory(
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

  public static async loadSubscriptionService(): Promise<
    typeof SubscriptionService
  > {
    const [subscriptionService] = ResourceResolver.getFiles();
    try {
      const service = await TypescriptLoader.requireFile<
        typeof SubscriptionService
      >(resolve(subscriptionService));
      return service;
    } catch (e) {
      return SubscriptionService;
    }
  }
}
