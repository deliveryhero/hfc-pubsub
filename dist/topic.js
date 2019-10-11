"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_service_1 = require("./pubsub.service");
class Topic {
    constructor() {
        this.name = "";
        this.mq = pubsub_service_1.default.getInstance();
    }
    validateMessage(message) {
        message;
    }
    async publish(message) {
        this.validateTopic(this.getName());
        this.validateMessage(message);
        message._timestamp = new Date().toISOString();
        this.mq.publish(this, message);
    }
    getName() {
        return this.name;
    }
    validateTopic(name) {
        if (!name || name.length <= 6) {
            throw new Error("Invalid Topic Name!");
        }
    }
}
exports.default = Topic;
//# sourceMappingURL=topic.js.map