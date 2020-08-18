import { SubscriberObject, Message } from "@honestfoodcompany/pubsub"; // this import is optional, it's provides the interfaces to use below

export default: SubscriberObject {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.subscriptionWithOptions',
  description: 'Will console log messages published on test.topic',

  options: {
    ackDeadline: 60,
    flowControl: {
      maxMessages: 100,
    },
    deadLetterPolicy: {
      topicName: 'example.test.deadletter',
      maxDeliveryAttempts: 6,
    },
    retryPolicy: {
      minimumBackoff: { seconds: 102 },
      maximumBackoff: { seconds: 500 },
    }
  },

  handleMessage: function(message: Message) {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};
