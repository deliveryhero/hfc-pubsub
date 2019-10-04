"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs = require("fs");
class SubscriptionService {
    constructor() {
        this.checkExistence(process.env, 'PUBSUB_ROOT_DIR');
        this.checkExistence(process.env, 'GOOGLE_CLOUD_PUB_SUB_PROJECT_ID');
        this.checkExistence(process.env, 'GOOGLE_APPLICATION_CREDENTIALS');
    }
    checkExistence(object, property) {
        if (!object.hasOwnProperty(property) || object.hasOwnProperty(property) && object[property] == '') {
            throw Error(`This module requires ${property} to be defined in your .env`);
        }
    }
    static start(mongooseConnection = null) {
        const subscriptions = SubscriptionService.getSubscriptions();
        for (let subscription of subscriptions) {
            subscription.setMongooseConnection(mongooseConnection);
            subscription.init();
            subscription.start();
        }
    }
    static getSubscriptions() {
        if (SubscriptionService.subscriptions.length > 0) {
            return SubscriptionService.subscriptions;
        }
        const dir = path_1.resolve(process.env.PUBSUB_ROOT_DIR, "subscriptions");
        const subscriptionService = path_1.resolve(process.env.PUBSUB_ROOT_DIR, 'subscription.service.js');
        const subscriptionsJson = path_1.resolve(process.env.PUBSUB_ROOT_DIR, 'subscriptions.json');
        if (fs.existsSync(subscriptionService)) {
            this.loadSubscriptionsFromService(subscriptionService);
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
            if (typeof subscription.getTopicName !== 'function') {
                throw Error('Each subscription must extend the base Subscription class');
            }
        });
    }
    static loadSubscriptionsFromDirectory(dir) {
        const subscriptionFiles = fs.readdirSync(dir).filter((file) => { return file.match(/\.js$/); });
        for (let file of subscriptionFiles) {
            let subscription = require(path_1.resolve(dir, file)).default;
            this.subscriptions.push(new subscription());
        }
    }
    static loadSubscriptionsFromService(subscriptionService) {
        require(path_1.resolve(subscriptionService)).default.subscriptions.forEach((subscription) => this.subscriptions.push(subscription));
    }
    static loadSubscriptionsFromJson(jsonFile) {
        let subscriptionsFile = require(jsonFile);
        if (typeof subscriptionsFile.subscriptions == "undefined") {
            throw Error("subscriptions.json is invalid. Make sure that subscriptions key is defined");
        }
        const subscriptions = subscriptionsFile.subscriptions;
        Object.keys(subscriptions).forEach((key) => {
            let pathToSubscription = path_1.resolve(process.env.PUBSUB_ROOT_DIR, "subscriptions", `${subscriptions[key]}.js`);
            if (fs.existsSync(pathToSubscription)) {
                let subscription = require(pathToSubscription).default;
                this.subscriptions.push(new subscription());
            }
            else {
                console.log(`Could not find subscription: ${subscriptions[key]}.js`);
            }
        });
    }
}
SubscriptionService.subscriptions = [];
SubscriptionService.instance = new SubscriptionService;
exports.default = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map