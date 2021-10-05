/**
 * @type {import('@honestfoodcompany/pubsub').SubscriberObject}
 */
const subscription = {
  topicName: 'test-topic',
  subscriptionName: 'test-topic.example.with-custom-credentials.subscription',
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

exports.default = subscription;
