"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_1 = __importDefault(require("../service/pubsub"));
class Topic {
    constructor() {
        this.name = '';
        this.retryConfig = {
            retryCodes: [10, 1, 4, 13, 8, 14, 2],
            backoffSettings: {
                initialRetryDelayMillis: 100,
                retryDelayMultiplier: 1.3,
                maxRetryDelayMillis: 60000,
                initialRpcTimeoutMillis: 5000,
                rpcTimeoutMultiplier: 1.0,
                maxRpcTimeoutMillis: 600000,
                totalTimeoutMillis: 600000,
            },
        };
        this.mq = pubsub_1.default.getInstance();
    }
    validateMessage(message) {
        message;
    }
    async publish(message, customRetryConfig) {
        this.validateTopic(this.getName());
        this.validateMessage(message);
        return this.mq.publish(this, Object.assign(Object.assign({}, message), { _timestamp: new Date().toISOString() }), Object.assign(Object.assign(Object.assign({}, this.retryConfig), customRetryConfig), ((customRetryConfig === null || customRetryConfig === void 0 ? void 0 : customRetryConfig.backoffSettings) && {
            backoffSettings: Object.assign(Object.assign({}, this.retryConfig.backoffSettings), customRetryConfig === null || customRetryConfig === void 0 ? void 0 : customRetryConfig.backoffSettings),
        })));
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
