exports.default = {
  topicName: 'test.v3.topic',
  subscriptionName: 'example.v3_overrideoptions-with-deadletter.subscription',
  description: 'Will console log messages published on test.v3.topic',
  options: {
    ackDeadline: 20,
    flowControl: { maxMessages: 40 },
    deadLetterPolicy: {
      deadletterTopic:
        'example.v3_overrideoptions-with-deadletter.subscription.deadletter',
      maxRetryAttempts: 14,
    },
  },
  handleMessage: function (message) {
    console.log(this.topicName);
    console.log(this.subscriptionName);
    console.log(message.data.toString());
  },
};
