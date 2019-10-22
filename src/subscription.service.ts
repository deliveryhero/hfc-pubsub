import Subscription from "./subscription";
import { resolve } from "path";
import fs = require("fs");

export default class SubscriptionService {
  public static subscriptions: (Subscription|null)[]  = [];
  public static instance = new SubscriptionService;
  public constructor() {
    this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
    this.checkExistence(process.env, 'GOOGLE_CLOUD_PUB_SUB_PROJECT_ID');
    this.checkExistence(process.env, 'GOOGLE_APPLICATION_CREDENTIALS');
  }

  protected checkExistence(object: any, property: string): void {
    if (!object.hasOwnProperty(property) || object.hasOwnProperty(property) && object[property] == '') {
      console.warn(`This module requires ${property} to be defined in your .env`);
    }
  }

  public static async init(): Promise<void> {
  }

  public static start(mongooseConnection: any = null): void {
    const subscriptions = SubscriptionService.getSubscriptions(true);
    for (let subscription of subscriptions) {
      if(!subscription) return;
      subscription.setMongooseConnection(mongooseConnection);
      subscription.init();
      subscription.start();
    }
  }

  public static getSubscriptions(init: boolean = false): (Subscription|null)[] {
    if (SubscriptionService.subscriptions.length > 0) {
      return SubscriptionService.subscriptions;
    } 
    const dir = resolve(process.env.PUBSUB_ROOT_DIR || "", "subscriptions");
    const subscriptionService = resolve(process.env.PUBSUB_ROOT_DIR || "", 'subscription.service.js');
    const subscriptionsJson = resolve(process.env.PUBSUB_ROOT_DIR || "", 'subscriptions.json');
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
    this.subscriptions.forEach((subscription) => {
      if (subscription && typeof subscription.getTopicName !== 'function') {
        throw Error('Each subscription must extend the base Subscription class');
      }
    });
  }

  protected static loadSubscriptionsFromDirectory(dir: string): void {
    const subscriptionFiles = fs.readdirSync(dir).filter((file) => { return file.match(/\.js$/) });
    for (let file of subscriptionFiles) {
      let subscription = require(resolve(dir,file)).default;
      this.subscriptions.push(new subscription());
    } 
  }

  protected static loadSubscriptionsFromService(subscriptionService: string, init: boolean = false): void {
    const service = require(resolve(subscriptionService)).default;
    if(init) service.init();
    service.subscriptions.forEach((subscription: Subscription): void => { this.subscriptions.push(subscription) });
  }

  protected static loadSubscriptionsFromJson(jsonFile: string): void {
    let subscriptionsFile = require(jsonFile);
    if (typeof subscriptionsFile.subscriptions == "undefined") {
      throw Error("subscriptions.json is invalid. Make sure that subscriptions key is defined");
    }
    const subscriptions = subscriptionsFile.subscriptions;
    Object.keys(subscriptions).forEach((key): void => {
      let pathToSubscription = resolve(process.env.PUBSUB_ROOT_DIR || "", "subscriptions", `${subscriptions[key]}.js`);
      if (!fs.existsSync(pathToSubscription)) {
        console.log(`Could not find subscription: ${subscriptions[key]}.js`);
        return;
      }
      let subscription = require(pathToSubscription).default;
      this.subscriptions.push(new subscription());
    });
  }
}
