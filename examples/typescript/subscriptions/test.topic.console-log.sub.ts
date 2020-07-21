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
