"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscription {
    constructor() {
        this.topicName = '';
        this.subscriptionName = '';
        this.description = '';
        this.maxMessages = 1;
        this.ackDeadlineSeconds = 10;
        this.handleMessage = this.handleMessage.bind(this);
    }
    init() { }
    async handleMessage(message) {
        message;
    }
    getMaxMessages() {
        return this.maxMessages;
    }
    getAckDeadlineSeconds() {
        return this.ackDeadlineSeconds;
    }
    getDescription() {
        return this.description;
    }
    getTopicName() {
        return this.topicName;
    }
    getSubscriptionName() {
        return this.subscriptionName;
    }
}
exports.default = Subscription;
