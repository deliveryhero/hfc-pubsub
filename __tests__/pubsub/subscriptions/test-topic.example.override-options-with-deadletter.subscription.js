/**
 * @type {import('@honestfoodcompany/pubsub').SubscriberObject}
 */
const subscription = {
  topicName: 'test-topic',
  subscriptionName:
    'test-topic.example.override-options-with-deadletter.subscription',
  description: 'Will console log messages published on test-topic',
  options: {
    ackDeadline: 20,
    flowControl: { maxMessages: 40 },
    deadLetterPolicy: {
      deadLetterTopic:
        'test-topic.example.override-options-with-deadletter.subscription.dlq',
      maxDeliveryAttempts: 14,
    },
  },
  handleMessage: function (message) {
    console.log(this.topicName);
    console.log(this.subscriptionName);
    console.log(message.data.toString());
  },
};

exports.default = subscription;
