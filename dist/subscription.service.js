"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_1 = __importDefault(require("./subscription"));
const path_1 = require("path");
const pubsub_service_1 = __importDefault(require("./pubsub.service"));
const fs = require("fs");
class SubscriptionService {
    constructor() {
        this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
        this.checkExistence(process.env, 'GOOGLE_CLOUD_PUB_SUB_PROJECT_ID');
        this.checkExistence(process.env, 'GOOGLE_APPLICATION_CREDENTIALS');
    }
    checkExistence(object, property) {
        if (!object.hasOwnProperty(property) ||
            (object.hasOwnProperty(property) && object[property] == '')) {
            console.warn(`@honestfoodcompany/pubsub module requires ${property} to be defined in your .env`);
        }
    }
    static async init() { }
    static start() {
        const subscriptions = SubscriptionService.getSubscriptions(true);
        for (let subscription of subscriptions) {
            if (typeof subscription == typeof subscription_1.default)
                this.pubSubService.subscribe(subscription);
        }
    }
    static getSubscriptions(init = false, returnInstances = false) {
        if (SubscriptionService.subscriptions.length > 0 && !returnInstances) {
            return SubscriptionService.subscriptions;
        }
        if (returnInstances) {
            return this.subscriptions.map((subscription) => {
                return new subscription();
            });
        }
        const dir = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
        const subscriptionService = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscription.service.js');
        const subscriptionsJson = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions.json');
        if (fs.existsSync(subscriptionService)) {
            this.loadSubscriptionsFromService(subscriptionService, init);
        }
        else if (fs.existsSync(subscriptionsJson)) {
            this.loadSubscriptionsFromJson(subscriptionsJson);
        }
        else {
            this.loadSubscriptionsFromDirectory(dir);
        }
        this.validateSubscriptions();
        return this.subscriptions;
    }
    static validateSubscriptions() {
        this.subscriptions.forEach((subscription) => {
            if (typeof subscription !== typeof subscription_1.default)
                throw Error('Each subscription must extend the base Subscription class');
        });
    }
    static loadSubscriptionsFromDirectory(dir) {
        const subscriptionFiles = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.js$/);
        });
        for (let file of subscriptionFiles) {
            let subscription = require(path_1.resolve(dir, file)).default;
            this.subscriptions.push(subscription);
        }
    }
    static loadSubscriptionsFromService(subscriptionService, init = false) {
        const service = require(path_1.resolve(subscriptionService)).default;
        if (init)
            service.init();
        service.subscriptions.forEach((subscription) => {
            this.subscriptions.push(subscription);
        });
    }
    static loadSubscriptionsFromJson(jsonFile) {
        let subscriptionsFile = require(jsonFile);
        if (typeof subscriptionsFile.subscriptions == 'undefined') {
            throw Error('subscriptions.json is invalid. Make sure that subscriptions key is defined');
        }
        const subscriptions = subscriptionsFile.subscriptions;
        Object.keys(subscriptions).forEach((key) => {
            let pathToSubscription = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions', `${subscriptions[key]}.js`);
            if (!fs.existsSync(pathToSubscription)) {
                console.log(`Could not find subscription: ${subscriptions[key]}.js`);
                return;
            }
            let subscription = require(pathToSubscription).default;
            this.subscriptions.push(subscription);
        });
    }
}
SubscriptionService.subscriptions = [];
SubscriptionService.instance = new SubscriptionService();
SubscriptionService.pubSubService = pubsub_service_1.default.getInstance();
exports.default = SubscriptionService;
