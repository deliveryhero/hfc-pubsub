"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscriber {
    constructor() {
        this.init = this.init.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }
    async init() { }
    async handleMessage(_message) { }
}
exports.default = Subscriber;
Subscriber.maxMessages = 1;
Subscriber.ackDeadlineSeconds = 10;
