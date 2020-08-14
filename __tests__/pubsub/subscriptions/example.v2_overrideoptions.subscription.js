'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const index = require('../../../dist/index');
class TestSubscriptionV2Override extends index.Subscriber {
  constructor() {
    super(...arguments);
    this.metadata = {
      topicName: 'test-topic',
      subscriptionName: 'example.v2_override.options.subscription',
      description: 'v2 subscription with options',
      options: {
        ackDeadline: 20,
        flowControl: { maxMessages: 40 },
      },
    };
  }
  async handleMessage(message) {
    const payload = JSON.parse(message.data.toString());
    message.ack();
  }
}
exports.default = TestSubscriptionV2Override;
