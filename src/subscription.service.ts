import Subscription from "./subscription";
import { resolve } from "path";
import fs = require("fs");
/**
 * @todo iterate through subscriptions found in  PUBSUB_ROOT_DIR/subscriptions, instantiate default classes and add to subscriptions array
 */

export default abstract class SubscriptionService {
  public static start(mongooseConnection: any = null): void {
    const subscriptions = SubscriptionService.getSubscriptions();
    for (let subscription of subscriptions) {
      subscription.setMongooseConnection(mongooseConnection);
      subscription.init();
      subscription.start();
    }
  }
  public static getSubscriptions(): Subscription[] {
    const subscriptions = [];
    const dir = resolve(process.env.PUBSUB_ROOT_DIR, "subscriptions");
    const subscriptionService = resolve(process.env.PUBSUB_ROOT_DIR, 'subscription.service.js');
    if (fs.existsSync(subscriptionService)) {
      require(resolve(subscriptionService)).default.subscriptions.forEach((subscription) => subscriptions.push(subscription));
      return subscriptions;
    }
    const subscriptionFiles = fs.readdirSync(dir).filter((file) => { return file.match(/\.js$/) });
    for (let file of subscriptionFiles) {
      let subscription = require(resolve(dir,file)).default;
      subscriptions.push(new subscription());
    }
    return subscriptions;
  }
}
