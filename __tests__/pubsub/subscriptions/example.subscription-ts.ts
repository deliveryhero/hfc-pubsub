import { Subscription } from "../../../src/index";

export default class TestSubscription extends Subscription {
    public topicName = "test-topic";
    public subscriptionName = "test-topic.subscription";
    public description = "Just a test subscription";
    async handleMessage(message) {
        const payload = JSON.parse(message.data.toString());
        message.ack();
    }
}