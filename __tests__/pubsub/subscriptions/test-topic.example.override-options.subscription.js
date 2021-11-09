/**
 * @type {import('@honestfoodcompany/pubsub').SubscriberObject<import('../topics/test-topic').Payload>}
 */
const subscription = {
  topicName: 'test-topic',
  subscriptionName: 'test-topic.example.override-options.subscription',
  description: 'Will console log messages published on test-topic',
  options: {
    ackDeadline: 20,
    flowControl: { maxMessages: 40 },
  },
  handleMessage: function (message) {
    console.log(this.topicName);
    console.log(this.subscriptionName);
    console.log(message.data.toString());
  },
};

exports.default = subscription;
