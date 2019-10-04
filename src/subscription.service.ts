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
    const dir = resolve(process.env.PUBSUB_ROOT_DIR, "subscriptions");
    const subscriptionFiles = fs.readdirSync(dir).filter((file) => { return file.match(/\.js$/) });
    const subscriptions = [];
    for (let file of subscriptionFiles) {
      let subscription = require(resolve(dir,file)).default;
      subscriptions.push(new subscription());
    }
    return subscriptions;
  }
}
