"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscriber {
    constructor() {
        this.handleMessage = this.handleMessage.bind(this);
    }
    init() { }
    async handleMessage(message) {
        message;
    }
}
exports.default = Subscriber;
Subscriber.topicName = '';
Subscriber.subscriptionName = '';
Subscriber.description = '';
Subscriber.maxMessages = 1;
Subscriber.ackDeadlineSeconds = 10;
