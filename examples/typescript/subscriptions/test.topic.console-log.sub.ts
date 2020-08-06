import { SubscriberObject, Message } from "@honestfoodcompany/pubsub"; // this import is optional, it's gives us the interfaces to use below

/**
 * this file will be autoloaded because of the .sub.ts suffix.
 * Alternatively, one can explicitly load a subscription by adding
 * this default export to the subscriber array in subscription.service.ts
 */

export default: SubscriberObject {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.console-log',
  description: 'Will console log messages published on test.topic',

  handleMessage: function(message: Message): void {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
    message.ack();
  },
};
