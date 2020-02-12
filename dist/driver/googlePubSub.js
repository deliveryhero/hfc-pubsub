"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const pubsub_1 = require("@google-cloud/pubsub");
const message_1 = __importDefault(require("../message"));
class GooglePubSubAdapter {
    constructor(client) {
        this.client = client;
        this.createOrGetSubscription = this.createOrGetSubscription.bind(this);
    }
    static getInstance() {
        if (!GooglePubSubAdapter.instance) {
            GooglePubSubAdapter.instance = new GooglePubSubAdapter(new pubsub_1.PubSub({
                projectId: process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID,
            }));
        }
        return GooglePubSubAdapter.instance;
    }
    async publish(topic, message) {
        const pubSubTopic = await this.createOrGetTopic(topic.getName());
        let messageId = await pubSubTopic.publish(Buffer.from(JSON.stringify(message)));
        return messageId;
    }
    async subscribe(subscriber) {
        const subscription = await this.createOrGetSubscription(subscriber);
        this.addHandler(subscriber, subscription);
        this.log(`   📭     ${subscriber.subscriptionName} is ready to receive messages at a controlled volume of ${subscriber.maxMessages} messages.`);
    }
    addHandler(subscriberClass, subscription) {
        subscription.on('message', async (message) => {
            const subscriber = new subscriberClass();
            subscriber.init();
            try {
                await subscriber.handleMessage(message_1.default.fromGCloud(message));
            }
            catch (err) {
                message.nack();
            }
        });
    }
    getSubscription(subscriber) {
        return this.getClient().subscription(subscriber.subscriptionName, this.getSubscriberOptions(subscriber));
    }
    log(message) {
        console.log(chalk_1.default.green.bold(message));
    }
    getSubscriberOptions(subscription) {
        return {
            ackDeadline: subscription.ackDeadlineSeconds,
            flowControl: {
                maxMessages: subscription.maxMessages,
            },
        };
    }
    async createOrGetSubscription(subscriber) {
        if (await this.subscriptionExists(subscriber.subscriptionName)) {
            console.log(chalk_1.default.gray(`Subscription ${subscriber.subscriptionName} already exists.`));
            return this.getSubscription(subscriber);
        }
        const topic = await this.createOrGetTopic(subscriber.topicName);
        await topic.createSubscription(subscriber.subscriptionName);
        console.log(chalk_1.default.green(`Subscription ${subscriber.subscriptionName} created.`));
        return this.getSubscription(subscriber);
    }
    async subscriptionExists(subscriptionName) {
        const [subscriptionExists] = await this.getClient()
            .subscription(subscriptionName)
            .exists();
        return subscriptionExists;
    }
    getClient() {
        return this.client;
    }
    async createOrGetTopic(topicName) {
        const pubSubTopic = this.getClient().topic(topicName);
        const [topic] = await pubSubTopic.get({ autoCreate: true });
        return topic;
    }
    async getAllSubscriptions() {
        const [subscriptionData] = await this.client.getSubscriptions();
        const subscriptionList = subscriptionData.map((datum) => {
            var _a, _b;
            const { metadata } = datum;
            return {
                topicName: ((_a = metadata) === null || _a === void 0 ? void 0 : _a.topic) || null,
                subscriptionName: ((_b = metadata) === null || _b === void 0 ? void 0 : _b.name) || datum.name,
            };
        });
        return subscriptionList;
    }
}
exports.default = GooglePubSubAdapter;
