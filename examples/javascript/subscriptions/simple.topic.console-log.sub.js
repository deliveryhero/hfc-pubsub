// NOTE: this file will be autoloaded because of the .sub.js suffix

/**
 * @type {import('@honestfoodcompany/pubsub').SubscriberObject}
 */
const subscription = {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.sub',
  description: 'Will console log messages published on test.topic',

  handleMessage: function (message) {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};

exports.default = subscription;
