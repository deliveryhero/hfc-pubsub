'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const pubsub_1 = require('../../../dist');

class TestSubscription extends pubsub_1.Subscriber {}

TestSubscription.topicName = 'test-topic';
TestSubscription.subscriptionName = 'test-topic.subscription';
TestSubscription.description = 'Just a test subscription';
TestSubscription.handleMessage = message => {
  const payload = JSON.parse(message.data.toString());
  console.log(payload);
  message.ack();
};
exports.default = TestSubscription;
//# sourceMappingURL=test.subscription.js.map
