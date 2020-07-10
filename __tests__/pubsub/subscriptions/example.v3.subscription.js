exports.default = {
  topicName: 'test.v3.topic',
  subscriptionName: 'test.v3.topic.subscription',
  description: 'Will console log messages published on test.v3.topic',
  options: {
    ackDeadline: 30, // in seconds
    flowControl: {
      maxMessages: 500,
    },
  },
  handleMessage: function(message) {
    console.log(this.topicName);
    console.log(this.subscriptionName);
    console.log(message.data.toString());
  },
};
