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
        if (SubscriptionService.subscribers.length > 0) {
            return SubscriptionService.subscribers;
        }
        SubscriptionService.loadSubscribersFromFilesystem(resourceResolver_1.ResourceResolver.getFiles());
        return SubscriptionService.subscribers;
    }
    static loadSubscribersFromFilesystem([subscriptionService, subscribersJson, dir,]) {
        const loader = new subscriberLoader_1.default();
        if (fs.existsSync(subscriptionService)) {
            this.subscribers = loader.loadSubscribersFromService(subscriptionService);
        }
        else if (fs.existsSync(subscribersJson)) {
            this.subscribers = loader.loadSubscribersFromJson(subscribersJson);
        }
        else {
            this.subscribers = loader.loadSubscribersFromDirectory(dir);
        }
        return this.subscribers;
    }
    static loadSubscriptionService() {
        const [subscriptionService] = resourceResolver_1.ResourceResolver.getFiles();
        const service = require(path_1.resolve(subscriptionService)).default;
        service.init();
        return service;
    }
    static async getAllSubscriptions() {
        return pubsub_1.default.getInstance().getAllSubscriptions();
    }
}
exports.default = SubscriptionService;
SubscriptionService.instance = new SubscriptionService();
