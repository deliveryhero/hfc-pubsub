import { SubscriberObject } from '@honestfoodcompany/pubsub'; // this import is optional, it's provides the interfaces to use below
interface Payload {
  x: string;
}

const subscriber: SubscriberObject<Payload> = {
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

  handleMessage: (message) => {
    console.log(message.json.x);
    message.ack();
  },
};

export default subscriber;
