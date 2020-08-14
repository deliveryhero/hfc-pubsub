"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscriber_1 = require("../subscriber");
const path_1 = require("path");
const fs = require("fs");
class SubscriberLoader {
    constructor() {
        this.subscribers = [];
    }
    loadSubscribersFromDirectory(dir, defaultOptions) {
        const subscribers = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.sub\.js$/);
        });
        for (const file of subscribers) {
            const subscriber = require(path_1.resolve(dir, file)).default;
            const version = subscriber_1.SubscriberV2.getSubscriberVersion(subscriber) || '';
            this.subscribers.push(this.loadSubscriber(subscriber, version, defaultOptions));
        }
        return this.subscribers;
    }
    loadSubscribersFromService(subscriptionService, defaultOptions) {
        if (!fs.existsSync(subscriptionService))
            return [];
        const service = require(path_1.resolve(subscriptionService)).default;
        return this.subscribers.concat(service.subscribers.map((subscriber) => this.loadSubscriber(subscriber, subscriber_1.SubscriberV2.getSubscriberVersion(subscriber), defaultOptions)));
    }
    loadSubscriber(subscriber, version, defaultOptions) {
        const v2SubscriberClass = subscriber_1.SubscriberV2.from(subscriber, version, defaultOptions);
        const instance = new v2SubscriberClass();
        return [v2SubscriberClass, instance.metadata];
    }
}
exports.default = SubscriberLoader;
