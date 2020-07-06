'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const index_1 = require('../../../dist/index');
class TestSubscriptionV2 extends index_1.Subscriber {
  constructor() {
    super(...arguments);
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
