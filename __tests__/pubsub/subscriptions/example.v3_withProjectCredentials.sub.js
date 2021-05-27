exports.default = {
  topicName: 'test.v3.topic',
  subscriptionName: 'test.v3_withProjectCredentials',
  description: 'Will test that the correct project credentials are being used',
  options: {
    project: {
      id: 'google-pubsub-project-id',
      credentials: {
        client_email: 'client email goes here',
        private_key: 'private key goes here',
      },
    },
  },
  handleMessage: function (message) {
    console.log(this.topicName);
    console.log(this.subscriptionName);
    console.log(message.data.toString());
  },
};
