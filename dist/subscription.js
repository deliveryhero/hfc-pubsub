"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_service_1 = __importDefault(require("./pubsub.service"));
class Subscription {
    constructor() {
        this.topicName = "";
        this.subscriptionName = "";
        this.description = "";
        this.maxMessages = 1;
        this.ackDeadlineSeconds = 10;
        this.pubSubService = pubsub_service_1.default.getInstance();
        this.handleMessage = this.handleMessage.bind(this);
        this.start = this.start.bind(this);
    }
    setMongooseConnection(connection) {
        this.mongooseConnection = connection;
        return this;
    }
    async start() {
        this.pubSubService.subscribe(this);
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
