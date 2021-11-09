import { resolve } from 'path';
import {
  Subscribers,
  SubscriberObject,
  SubscriberTuple,
  SubscriberOptions,
  SubscriberMetadata,
} from '../subscriber';
import { Logger } from './logger';
import SubscriberLoader from './subscriberLoader';
import { ResourceResolver } from './resourceResolver';

export default class SubscriptionService {
  public static subscribers: SubscriberObject<any>[] = [];
  private static _subscribers: Subscribers = [];
  private static _service: typeof SubscriptionService;

  /**
   * All subscriptions will inherit from this default options object
   */
  public static defaultSubscriberOptions: SubscriberOptions;

  public constructor() {
    this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
  }

  private checkExistence(object: any, property: string): void {
    if (
      !object.hasOwnProperty(property) ||
      (object.hasOwnProperty(property) && object[property] == '')
    ) {
      throw new Error(
        `@honestfoodcompany/pubsub module requires ${property} to be defined in your .env`,
      );
    }
  }

  /**
   * Can be used to initialize process level globals (like DB Connections).
   * Default is a no-op
   */
  public static async init(): Promise<void> {
    //
  }

  /**
   * If passed, it would serve as the default error handler for all subscriptions.
   * Applications should override this with custom error handling: log error, cleanup resources and exit the process.
   * Default logs the error and **rethrows**
   */
  public static handleError(error: Error, metadata: SubscriberMetadata): void {
    // default error handling logic
    Logger.Instance.error(
      { error, metadata },
      'Received unexpected error in subscription',
    );
    // To keep backwards compatibility with no error handler
    throw error;
  }

  /**
   * Call this function from a process exit handler to close all current subscriptions
   */
  public static async closeAll(): Promise<void> {
    //
  }

  public static getSubscribers(): Subscribers {
    if (SubscriptionService._subscribers?.length > 0) {
      return SubscriptionService._subscribers as Subscribers;
    }

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
    if (SubscriptionService._service) return SubscriptionService._service;

    const [subscriptionService] = ResourceResolver.getFiles();
    try {
      SubscriptionService._service = require(resolve(
        subscriptionService,
      )).default;
    } catch (e) {
      SubscriptionService._service = SubscriptionService;
      Logger.Instance.warn(
        {
          err: e,
        },
        'Could not load custom subscription service',
      );
    }
    return SubscriptionService._service;
  }
}
