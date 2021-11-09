/**
 * @type {import('@honestfoodcompany/pubsub').SubscriberObject}
 */
const subscription = {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.subscription-with-options',
  description: 'Will console log messages published on test.topic',

  options: {
    flowControl: {
      maxMessages: 100,
    },
    enableMessageOrdering: true,
  },

  handleMessage: function (message) {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};

exports.default = subscription;
