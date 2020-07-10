"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_1 = __importDefault(require("../service/pubsub"));
class Topic {
    constructor() {
        this.name = '';
        this.mq = pubsub_1.default.getInstance();
    }
    validateMessage(message) {
        message;
    }
    async publish(message) {
        this.validateTopic(this.getName());
        this.validateMessage(message);
        return this.mq.publish(this, Object.assign(Object.assign({}, message), { _timestamp: new Date().toISOString() }));
    }
    getName() {
        return this.name;
    }
    validateTopic(name) {
        if (!name || name.length <= 6) {
            throw new Error('Invalid Topic Name!');
        }
    }
}
exports.default = Topic;
