'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const index = require('../../../dist/index');
class TestSubscriptionV2RetryConfig extends index.SubscriberV2 {
  constructor() {
    super(...arguments);
    this.metadata = {
      topicName: 'test-topic',
      subscriptionName: 'example.v2_retryConfig.options.subscription',
      description: 'v2 subscription with options',
      options: {
        retryPolicy: {
          maximumBackoff: {
            seconds: 100,
            nanos: 2,
          },
          minimumBackoff: {
            seconds: 100,
            nanos: 2,
          },
        },
      },
    };
  }
  async handleMessage(message) {
    const payload = JSON.parse(message.data.toString());
    message.ack();
  }
}
exports.default = TestSubscriptionV2RetryConfig;
