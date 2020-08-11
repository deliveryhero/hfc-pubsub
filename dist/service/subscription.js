"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pubsub_1 = __importDefault(require("./pubsub"));
const path_1 = require("path");
const fs = require("fs");
const subscriberLoader_1 = __importDefault(require("./subscriberLoader"));
const resourceResolver_1 = require("./resourceResolver");
class SubscriptionService {
    constructor() {
        this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
    }
    checkExistence(object, property) {
        if (!object.hasOwnProperty(property) ||
            (object.hasOwnProperty(property) && object[property] == '')) {
            console.warn(`@honestfoodcompany/pubsub module requires ${property} to be defined in your .env`);
        }
    }
    static async init() { }
    static getSubscribers() {
        if (SubscriptionService._subscribers.length > 0) {
            return SubscriptionService._subscribers;
        }
        SubscriptionService.loadSubscribersFromFilesystem(resourceResolver_1.ResourceResolver.getFiles());
        return SubscriptionService._subscribers;
    }
    static loadSubscribersFromFilesystem([subscriptionService, dir]) {
        const subscriptionClass = SubscriptionService.loadSubscriptionService();
        const loader = new subscriberLoader_1.default();
        const subscribersFromService = fs.existsSync(subscriptionService)
            ? loader.loadSubscribersFromService(subscriptionService, undefined, subscriptionClass.defaultSubscriberOptions)
            : [];
        const subscribersFromDirectory = loader.loadSubscribersFromDirectory(dir, subscriptionClass.defaultSubscriberOptions);
        SubscriptionService._subscribers = Array.from(subscribersFromService
            .concat(subscribersFromDirectory)
            .reduce((map, subscriber) => {
            const subscriptionKey = subscriber[1].topicName + subscriber[1].subscriptionName;
            map.set(subscriptionKey, subscriber);
            return map;
        }, new Map())
            .values());
        return SubscriptionService._subscribers;
    }
    static loadSubscriptionService() {
        const [subscriptionService] = resourceResolver_1.ResourceResolver.getFiles();
        try {
            const service = require(path_1.resolve(subscriptionService)).default;
            service.init();
            return service;
        }
        catch (e) {
            return SubscriptionService;
        }
    }
    static async getAllSubscriptions() {
        return pubsub_1.default.getInstance().getAllSubscriptions();
    }
}
exports.default = SubscriptionService;
SubscriptionService.subscribers = [];
SubscriptionService._subscribers = [];
SubscriptionService.defaultSubscriberOptions = {
    ackDeadline: 30,
    flowControl: {
        maxMessages: 5
    }
};
SubscriptionService.instance = new SubscriptionService();
