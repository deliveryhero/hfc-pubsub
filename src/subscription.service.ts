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
  protected checkExistence(object, property) {
    if (!object.hasOwnProperty(property) || object.hasOwnProperty(property) && object[property] == '') {
      console.warn(`This module requires ${property} to be defined in your .env`);
    }
  }
  public static start(mongooseConnection: any = null): void {
    const subscriptions = SubscriptionService.getSubscriptions();
    for (let subscription of subscriptions) {
      subscription.setMongooseConnection(mongooseConnection);
      subscription.init();
      subscription.start();
    }
  }
  public static getSubscriptions(): Subscription[] {
    if (SubscriptionService.subscriptions.length > 0) {
      return SubscriptionService.subscriptions;
    } 
    const dir = resolve(process.env.PUBSUB_ROOT_DIR, "subscriptions");
    const subscriptionService = resolve(process.env.PUBSUB_ROOT_DIR, 'subscription.service.js');
    const subscriptionsJson = resolve(process.env.PUBSUB_ROOT_DIR, 'subscriptions.json');
    if (fs.existsSync(subscriptionService)) {
      this.loadSubscriptionsFromService(subscriptionService);
    } else if (fs.existsSync(subscriptionsJson)) {
      this.loadSubscriptionsFromJson(subscriptionsJson);
    } else {
      this.loadSubscriptionsFromDirectory(dir);
    }
    this.validateSubscriptions();
    return this.subscriptions;
  }
  protected static validateSubscriptions() {
    this.subscriptions.forEach((subscription) => {
      if (typeof subscription.getTopicName !== 'function') {
        throw Error('Each subscription must extend the base Subscription class');
      }
    });
  }
  protected static loadSubscriptionsFromDirectory(dir) {
    const subscriptionFiles = fs.readdirSync(dir).filter((file) => { return file.match(/\.js$/) });
    for (let file of subscriptionFiles) {
      let subscription = require(resolve(dir,file)).default;
      this.subscriptions.push(new subscription());
    } 
  }
  protected static loadSubscriptionsFromService(subscriptionService) {
    require(resolve(subscriptionService)).default.subscriptions.forEach((subscription) => this.subscriptions.push(subscription));
  }
  protected static loadSubscriptionsFromJson(jsonFile) {
    let subscriptionsFile = require(jsonFile);
    if (typeof subscriptionsFile.subscriptions == "undefined") {
      throw Error("subscriptions.json is invalid. Make sure that subscriptions key is defined");
    }
    const subscriptions = subscriptionsFile.subscriptions;
    Object.keys(subscriptions).forEach((key) => {
      let pathToSubscription = resolve(process.env.PUBSUB_ROOT_DIR, "subscriptions", `${subscriptions[key]}.js`);
      if (fs.existsSync(pathToSubscription)) {
        let subscription = require(pathToSubscription).default;
        this.subscriptions.push(new subscription());
      } else {
        console.log(`Could not find subscription: ${subscriptions[key]}.js`);
      }
    });
  }
}
