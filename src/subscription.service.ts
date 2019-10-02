import Subscription from "./subscription";
/**
 * @todo iterate through subscriptions found in  PUBSUB_ROOT_DIR/subscriptions, instantiate default classes and add to subscriptions array
 */

export default abstract class SubscriptionService {
  public static subscriptions: Subscription[];
  public static start(mongooseConnection: any = null): void {
    for (let subscription of this.subscriptions) {
      subscription.setMongooseConnection(mongooseConnection);
      subscription.init();
      subscription.start();
    }
  }
}
