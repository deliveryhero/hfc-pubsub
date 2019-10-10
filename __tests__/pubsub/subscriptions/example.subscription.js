"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_1 = require("../../../dist/src");
class TestSubscription extends pubsub_1.Subscription {
    constructor() {
        super(...arguments);
        this.topicName = "test-topic";
        this.subscriptionName = "test-topic.subscription";
        this.description = "Just a test subscription";
    }
    async handleMessage(message) {
        const payload = JSON.parse(message.data.toString());
        message.ack();
    }
}
exports.default = TestSubscription;
//# sourceMappingURL=test.subscription.js.map