"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_1 = require("@google-cloud/pubsub");
const chalk_1 = __importDefault(require("chalk"));
class PubSubService {
    constructor() {
        if (!process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID ||
            !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
            throw new Error("Missing value for env variable GOOGLE_CLOUD_PUB_SUB_PROJECT_ID / GOOGLE_APPLICATION_CREDENTIALS");
        }
        this.client = new pubsub_1.PubSub({ projectId: process.env.GCLOUD_PROJECT });
        this.createSubscription = this.createSubscription.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    static getInstance() {
        if (!PubSubService.instance) {
            PubSubService.instance = new PubSubService();
        }
        return PubSubService.instance;
    }
    async publish(topic, message) {
        this.validate(topic, message);
        const pubSubTopic = await this.getClient().topic(topic.getName());
        pubSubTopic.get({ autoCreate: true });
        let messageId = await pubSubTopic.publish(Buffer.from(JSON.stringify(message)));
        return messageId;
    }
    getClient() {
        return this.client;
    }
    validate(topic, message) {
        topic.validateTopic(topic.getName());
        topic.validateMessage(message);
    }
    async subscribe(subscription) {
        await this.createSubscription(subscription.getTopicName(), subscription.getSubscriptionName());
        const subscriberOptions = {
            ackDeadline: subscription.getAckDeadlineSeconds(),
            flowControl: {
                maxMessages: subscription.getMaxMessages(),
            },
        };
        const gcloudSubscription = this.client.subscription(subscription.getSubscriptionName(), subscriberOptions);
        console.log(chalk_1.default.green.bold(`   📭     ${subscription.getSubscriptionName()} is ready to receive messages at a controlled volume of ${subscription.getMaxMessages()} messages.`));
        gcloudSubscription.on(`message`, subscription.handleMessage);
    }
    async createSubscription(topicName, subscriptionName) {
        const pubSubTopic = this.getClient().topic(topicName);
        await pubSubTopic.get({ autoCreate: true });
        const subscription = pubSubTopic.subscription(subscriptionName);
        const response = await subscription.exists();
        if (response[0]) {
            console.log(chalk_1.default.gray(`Subscription ${subscriptionName} already exists.`));
            return;
        }
        await pubSubTopic.createSubscription(subscriptionName);
        console.log(chalk_1.default.green(`Subscription ${subscriptionName} created.`));
    }
}
exports.default = PubSubService;
