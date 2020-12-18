"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscriber_1 = require("../subscriber");
const path_1 = require("path");
const fs = require("fs");
class SubscriberLoader {
    loadSubscribersFromDirectory(dir, defaultOptions) {
        const subscriberFiles = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.sub\.js$/);
        });
        const subscribers = [];
        for (const file of subscriberFiles) {
            const subscriber = require(path_1.resolve(dir, file)).default;
            subscribers.push(this.loadSubscriber(subscriber, subscriber_1.SubscriberV2.getSubscriberVersion(subscriber), defaultOptions));
        }
        return subscribers;
    }
    loadSubscribersFromService(subscriptionService, defaultOptions) {
        if (!fs.existsSync(subscriptionService))
            return [];
        const subscribers = [];
        const service = require(path_1.resolve(subscriptionService)).default;
        for (const subscriber of service.subscribers) {
            subscribers.push(this.loadSubscriber(subscriber, subscriber_1.SubscriberV2.getSubscriberVersion(subscriber), defaultOptions));
        }
        return subscribers;
    }
    loadSubscriber(subscriber, version, defaultOptions) {
        const v2SubscriberClass = subscriber_1.SubscriberV2.from(subscriber, version, defaultOptions);
        const instance = new v2SubscriberClass();
        return [v2SubscriberClass, instance.metadata];
    }
}
exports.default = SubscriberLoader;
