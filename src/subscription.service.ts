import Subscription from './subscription';
import { resolve } from 'path';
import PubSubService from './pubsub.service';
import fs = require('fs');

export default class SubscriptionService {
  public static subscriptions: typeof Subscription[] = [];
  public static instance = new SubscriptionService();
  public static pubSubService = PubSubService.getInstance();
  public constructor() {
    this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
    this.checkExistence(process.env, 'GOOGLE_CLOUD_PUB_SUB_PROJECT_ID');
    this.checkExistence(process.env, 'GOOGLE_APPLICATION_CREDENTIALS');
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

  public static start(): void {
    const subscriptions = SubscriptionService.getSubscriptions(true);
    for (let subscription of subscriptions) {
      if (typeof subscription == typeof Subscription)
        this.pubSubService.subscribe(subscription as typeof Subscription);
    }
  }

  public static getSubscriptions(
    init: boolean = false,
    returnInstances: boolean = false,
  ): (typeof Subscription)[] | Subscription[] {
    if (SubscriptionService.subscriptions.length > 0 && !returnInstances) {
      return SubscriptionService.subscriptions;
    }
    if (returnInstances) {
      return this.subscriptions.map(
        (subscription: typeof Subscription): Subscription => {
          //@ts-ignore
          return new subscription();
        },
      );
    }
    const dir = resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
    const subscriptionService = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscription.service.js',
    );
    const subscriptionsJson = resolve(
      process.env.PUBSUB_ROOT_DIR || '',
      'subscriptions.json',
    );
    if (fs.existsSync(subscriptionService)) {
      this.loadSubscriptionsFromService(subscriptionService, init);
    } else if (fs.existsSync(subscriptionsJson)) {
      this.loadSubscriptionsFromJson(subscriptionsJson);
    } else {
      this.loadSubscriptionsFromDirectory(dir);
    }
    this.validateSubscriptions();
    return this.subscriptions;
  }

  protected static validateSubscriptions(): void {
    this.subscriptions.forEach((subscription: any): void => {
      if (typeof subscription !== typeof Subscription)
        throw Error(
          'Each subscription must extend the base Subscription class',
        );
    });
  }

  protected static loadSubscriptionsFromDirectory(dir: string): void {
    const subscriptionFiles = fs
      .readdirSync(dir)
      .filter((file): RegExpMatchArray | null => {
        return file.match(/\.js$/);
      });
    for (let file of subscriptionFiles) {
      let subscription = require(resolve(dir, file)).default;
      this.subscriptions.push(subscription);
    }
  }

  protected static loadSubscriptionsFromService(
    subscriptionService: string,
    init: boolean = false,
  ): void {
    const service = require(resolve(subscriptionService)).default;
    if (init) service.init();
    service.subscriptions.forEach((subscription: typeof Subscription): void => {
      this.subscriptions.push(subscription);
    });
  }

  protected static loadSubscriptionsFromJson(jsonFile: string): void {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let subscriptionsFile = require(jsonFile);
    if (typeof subscriptionsFile.subscriptions == 'undefined') {
      throw Error(
        'subscriptions.json is invalid. Make sure that subscriptions key is defined',
      );
    }
    const subscriptions = subscriptionsFile.subscriptions;
    Object.keys(subscriptions).forEach((key): void => {
      let pathToSubscription = resolve(
        process.env.PUBSUB_ROOT_DIR || '',
        'subscriptions',
        `${subscriptions[key]}.js`,
      );
      if (!fs.existsSync(pathToSubscription)) {
        console.log(`Could not find subscription: ${subscriptions[key]}.js`);
        return;
      }
      let subscription = require(pathToSubscription).default;
      this.subscriptions.push(subscription);
    });
  }
}
