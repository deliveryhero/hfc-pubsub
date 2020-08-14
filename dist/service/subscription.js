"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
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
        SubscriptionService.loadSubscribers();
        return SubscriptionService._subscribers;
    }
    static loadSubscribers() {
        const [subscriptionService, dir] = resourceResolver_1.ResourceResolver.getFiles();
        const subscriptionServiceClass = SubscriptionService.loadSubscriptionService();
        const loader = new subscriberLoader_1.default();
        SubscriptionService._subscribers = this.mergeSubscribers(loader.loadSubscribersFromService(subscriptionService, subscriptionServiceClass.defaultSubscriberOptions), loader.loadSubscribersFromDirectory(dir, subscriptionServiceClass.defaultSubscriberOptions));
        return SubscriptionService._subscribers;
    }
    static mergeSubscribers(subscribersFromService, subscribersFromDirectory) {
        return Array.from(subscribersFromService
            .concat(subscribersFromDirectory)
            .reduce((map, subscriber) => {
            const subscriptionKey = subscriber[1].topicName + subscriber[1].subscriptionName;
            map.set(subscriptionKey, subscriber);
            return map;
        }, new Map())
            .values());
    }
    static loadSubscriptionService() {
        const [subscriptionService] = resourceResolver_1.ResourceResolver.getFiles();
        try {
            const service = require(path_1.resolve(subscriptionService)).default;
            return service;
        }
        catch (e) {
            return SubscriptionService;
        }
    }
}
exports.default = SubscriptionService;
SubscriptionService.subscribers = [];
SubscriptionService._subscribers = [];
SubscriptionService.defaultSubscriberOptions = {
    ackDeadline: 30,
    flowControl: {
        maxMessages: 5,
    },
};
SubscriptionService.instance = new SubscriptionService();
