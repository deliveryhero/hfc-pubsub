import BaseSubscription from "./base/subscription";
import { Message } from "@google-cloud/pubsub";
import { EscalationService } from "../../escalation/escalation.service";
import { Subscription } from "@hfc/pubsub";
import { Payload } from "../topics/ops-master.queue.escalation";

export default class {{subscriptionClassName}} extends Subscription {
  public topicName: string = "{{topicName}}";
  public subscriptionName: string = "{{subscriptionName}}";
  public description: string =
    "{{subscriptionDescription}}";

  public async handleMessage(message: Message): Promise<void> {
      const payload: Payload = JSON.parse(message.data.toString());
      message.ack();
  }
}
