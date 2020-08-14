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
        this.topics = new Map();
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
        const messageId = await pubSubTopic.publish(Buffer.from(JSON.stringify(message)));
        return messageId;
    }
    async subscribe(subscriber) {
        var _a, _b;
        const [, metadata] = subscriber;
        const subscription = await this.createOrGetSubscription(subscriber);
        this.addHandler(subscriber, subscription);
        this.log(`   📭     ${metadata.subscriptionName} is ready to receive messages at a controlled volume of ${(_b = (_a = metadata.options) === null || _a === void 0 ? void 0 : _a.flowControl) === null || _b === void 0 ? void 0 : _b.maxMessages} messages.`);
    }
    addHandler(subscriber, subscription) {
        const [subscriberClass] = subscriber;
        subscription.on('message', (message) => {
            const subscriber = new subscriberClass();
            subscriber.init();
            subscriber.handleMessage(message_1.default.fromGCloud(message)).catch(() => {
                message.nack();
            });
        });
    }
    log(message) {
        console.log(chalk_1.default.green.bold(message));
    }
    getSubscriberOptions(subscriber) {
        const [, metadata] = subscriber;
        return metadata.options;
    }
    async createOrGetSubscription(subscriber) {
        const client = new pubsub_1.PubSub({
            projectId: process.env.GOOGLE_CLOUD_PUB_SUB_PROJECT_ID,
        });
        const [, metadata] = subscriber;
        if (await this.subscriptionExists(metadata.subscriptionName, client)) {
            console.log(chalk_1.default.gray(`Subscription ${metadata.subscriptionName} already exists.`));
            return this.getSubscription(subscriber, client);
        }
        const topic = await this.createOrGetTopic(metadata.topicName);
        await this.createSubscription(topic, subscriber);
        return this.getSubscription(subscriber, client);
    }
    async createSubscription(topic, subscriber) {
        const [, metadata] = subscriber;
        try {
            await topic.createSubscription(metadata.subscriptionName, Object.assign(Object.assign({}, this.getSubscriberOptions(subscriber)), (await this.mergeDeadLetterPolicy(this.getSubscriberOptions(subscriber)))));
            console.log(chalk_1.default.green(`Subscription ${metadata.subscriptionName} created.`));
        }
        catch (e) {
            console.error('There was an error creating a subscription.', e);
        }
    }
    async mergeDeadLetterPolicy(options) {
        if (!options)
            return;
        if (options.deadLetterPolicy) {
            return Object.assign(Object.assign({}, options), { deadLetterPolicy: Object.assign(Object.assign({}, options.deadLetterPolicy), { deadLetterTopic: await this.createDeadLetterTopic(options.deadLetterPolicy) }) });
        }
        return;
    }
    async createDeadLetterTopic(policy) {
        const topic = await this.createOrGetTopic(policy.deadLetterTopic);
        return topic.name;
    }
    getSubscription(subscriber, client) {
        const [, metadata] = subscriber;
        return client.subscription(metadata.subscriptionName, this.getSubscriberOptions(subscriber));
    }
    async subscriptionExists(subscriptionName, client) {
        const [subscriptionExists] = await client
            .subscription(subscriptionName)
            .exists();
        return subscriptionExists;
    }
    getClient() {
        return this.client;
    }
    async createOrGetTopic(topicName) {
        const cachedTopic = this.topics.get(topicName);
        if (cachedTopic) {
            return cachedTopic;
        }
        const pubSubTopic = this.getClient().topic(topicName);
        const [topic] = await pubSubTopic.get({ autoCreate: true });
        this.topics.set(topicName, topic);
        return topic;
    }
    async getAllSubscriptions() {
        const [subscriptionData] = await this.client.getSubscriptions();
        const subscriptionList = subscriptionData.map((datum) => {
            const { metadata } = datum;
            return {
                topicName: (metadata === null || metadata === void 0 ? void 0 : metadata.topic) || null,
                subscriptionName: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || datum.name,
            };
        });
        return subscriptionList;
    }
}
exports.default = GooglePubSubAdapter;
