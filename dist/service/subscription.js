"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscriber_1 = __importDefault(require("../subscriber"));
const path_1 = require("path");
const fs = require("fs");
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
        SubscriptionService.loadSubscribersFromLocations(SubscriptionService.getSubscriptionLocations());
        SubscriptionService.validateSubscribers();
        return SubscriptionService.subscribers;
    }
    static loadSubscribersFromLocations([subscriptionService, subscribersJson, dir,]) {
        if (fs.existsSync(subscriptionService)) {
            SubscriptionService.loadSubscribersFromService(subscriptionService);
        }
        else if (fs.existsSync(subscribersJson)) {
            SubscriptionService.loadSubscribersFromJson(subscribersJson);
        }
        else {
            SubscriptionService.loadSubscribersFromDirectory(dir);
        }
    }
    static loadSubscriptionService() {
        const [subscriptionService] = this.getSubscriptionLocations();
        const service = require(path_1.resolve(subscriptionService)).default;
        service.init();
        return service;
    }
    static getSubscriptionLocations() {
        const dir = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
        const subscriptionService = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscription.service.js');
        const subscribersJson = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscribers.json');
        return [subscriptionService, subscribersJson, dir];
    }
    static validateSubscribers() {
        this.subscribers.forEach((subscriber) => {
            if (typeof subscriber !== typeof subscriber_1.default)
                throw Error('Each subscription must extend the base Subscription class');
        });
    }
    static loadSubscribersFromDirectory(dir) {
        const subscriptionFiles = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.js$/);
        });
        for (let file of subscriptionFiles) {
            let subscription = require(path_1.resolve(dir, file)).default;
            this.subscribers.push(subscription);
        }
    }
    static loadSubscribersFromService(subscriptionService, init = false) {
        const service = require(path_1.resolve(subscriptionService)).default;
        if (init)
            service.init();
        service.subscribers.forEach((subscription) => {
            this.subscribers.push(subscription);
        });
    }
    static loadSubscribersFromJson(jsonFile) {
        const subscribersFile = require(jsonFile);
        if (typeof subscribersFile.subscribers == 'undefined') {
            throw Error('subscribers.json is invalid. Make sure that subscribers key is defined');
        }
        const subscribers = subscribersFile.subscribers;
        Object.keys(subscribers).forEach((key) => {
            let pathToSubscribers = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions', `${subscribers[key]}.js`);
            if (!fs.existsSync(pathToSubscribers)) {
                console.log(`Could not find subscription: ${subscribers[key]}.js`);
                return;
            }
            const subscription = require(pathToSubscribers).default;
            this.subscribers.push(subscription);
        });
    }
}
SubscriptionService.subscribers = [];
SubscriptionService.instance = new SubscriptionService();
exports.default = SubscriptionService;
