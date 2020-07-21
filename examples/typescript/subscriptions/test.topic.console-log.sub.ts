/**
 * this file will be autoloaded because of the .sub.ts suffix.
 * Alternatively, one can explicitly load a subscription by adding
 * this default export to the subscriber array in subscription.service.ts
 */

export default {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.console-log',
  description: 'Will console log messages published on test.topic',
  options: {
    ackDeadline: 30, // in seconds
    flowControl: {
      maxMessages: 500,
    },
  },
  handleMessage: function(message): void {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
