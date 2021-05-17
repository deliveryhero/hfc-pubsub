exports.default = {
  topicName: 'test.v3.topic',
  subscriptionName: 'test.v3_3.topic.subscription',
  description: 'Will console log messages published on test.v3.topic',
  handleMessage: function(message) {
    console.log(this.topicName);
    console.log(this.subscriptionName);
    console.log(message.data.toString());
  },
};
