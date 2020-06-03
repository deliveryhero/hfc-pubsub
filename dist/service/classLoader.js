"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs = require("fs");
class ClassLoader {
    constructor() {
        this.subscribers = [];
    }
    loadSubscribersFromDirectory(dir) {
        const subscriptionFiles = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.js$/);
        });
        for (const file of subscriptionFiles) {
            const subscription = require(path_1.resolve(dir, file)).default;
            this.subscribers.push(subscription);
        }
        return this.subscribers;
    }
    loadSubscribersFromService(subscriptionService, init = false) {
        const service = require(path_1.resolve(subscriptionService)).default;
        if (init)
            service.init();
        service.subscribers.forEach((subscription) => {
            this.subscribers.push(subscription);
        });
        return this.subscribers;
    }
    loadSubscribersFromJson(jsonFile) {
        const subscribersFile = require(jsonFile);
        if (typeof subscribersFile.subscribers == 'undefined') {
            throw Error('subscribers.json is invalid. Make sure that subscribers key is defined');
        }
        const subscribers = subscribersFile.subscribers;
        Object.keys(subscribers).forEach((key) => {
            const pathToSubscribers = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions', `${subscribers[key]}.js`);
            if (!fs.existsSync(pathToSubscribers)) {
                console.log(`Could not find subscription: ${subscribers[key]}.js`);
                return;
            }
            const subscription = require(pathToSubscribers).default;
            this.subscribers.push(subscription);
        });
        return this.subscribers;
    }
}
exports.ClassLoader = ClassLoader;
