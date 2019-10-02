import SubscriptionService from "./baseSubscriptionService";
import OpsMasterEscalationSubscriber from "../subscriptions/ops-master.queue.escalation.slack";

export default class Subscriptions extends SubscriptionService {
  /**
   * Add subscriptions to this array to register them
   */
  public static subscriptions = [new OpsMasterEscalationSubscriber()];
}
