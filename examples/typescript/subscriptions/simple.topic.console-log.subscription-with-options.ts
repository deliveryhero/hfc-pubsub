import { SubscriberObject, Message } from '@honestfoodcompany/pubsub'; // this import is optional, it's provides the interfaces to use below

const subscriber: SubscriberObject = {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.subscription-with-options',
  description: 'Will console log messages published on test.topic',

  options: {
    ackDeadline: 60,
    flowControl: {
      maxMessages: 100,
    },
    deadLetterPolicy: {
      deadLetterTopic: 'simple.topic.console-log.subscription-with-options.dlq',
      maxDeliveryAttempts: 6,
    },
    retryPolicy: {
      minimumBackoff: { seconds: 102 },
      maximumBackoff: { seconds: 500 },
    },
    enableMessageOrdering: true,
  },

  handleMessage: function (message: Message) {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};

export default subscriber;
