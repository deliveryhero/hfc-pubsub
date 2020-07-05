'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const pubsub_1 = require('../../../dist');

class TestSubscriptionV2 extends pubsub_1.Subscriber {
  constructor() {
    super();
    this.metadata = {
      topicName: 'test-topic',
      subscriptionName: 'test-topic.v2-subscription',
      description: 'Just a test subscription',
    };
  }
  async handleMessage(message) {
    const payload = JSON.parse(message.data.toString());
    message.ack();
  }
}
exports.default = TestSubscriptionV2;
