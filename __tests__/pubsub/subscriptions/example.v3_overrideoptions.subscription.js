exports.default = {
    topicName: 'test.v3.topic',
    subscriptionName: 'example.v3_overrideoptions.subscription',
    description: 'Will console log messages published on test.v3.topic',
    options: {
        ackDeadline: 20,
    flowControl: { maxMessages: 40 },
    },
  handleMessage: function(message) {
      console.log(this.topicName);
      console.log(this.subscriptionName);
      console.log(message.data.toString());
    },
  };
  