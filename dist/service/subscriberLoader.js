"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscriber_1 = require("../subscriber");
const path_1 = require("path");
const fs = require("fs");
class SubscriberLoader {
    constructor() {
        this.subscribers = [];
    }
    loadSubscribersFromDirectory(dir) {
        const subscribers = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.sub\.js$/);
        });
        for (const file of subscribers) {
            const subscriber = require(path_1.resolve(dir, file)).default;
            const version = subscriber_1.SubscriberV2.getSubscriberVersion(subscriber) || '';
            this.subscribers.push(this.loadSubscriber(subscriber, version));
        }
        return this.subscribers;
    }
    loadSubscribersFromService(subscriptionService, init = false) {
        const service = require(path_1.resolve(subscriptionService)).default;
        if (init)
            service.init();
        service.subscribers.map((subscriber) => {
            const version = subscriber_1.SubscriberV2.getSubscriberVersion(subscriber) || '';
            this.subscribers.push(this.loadSubscriber(subscriber, version));
        });
        return this.subscribers;
    }
    loadSubscriber(subscriber, version) {
        switch (version) {
            case 'v1': {
                const v2SubscriberClass = subscriber_1.SubscriberV2.from(subscriber, 'v1');
                const instance = new v2SubscriberClass();
                return [v2SubscriberClass, instance.metadata];
            }
            case 'v2': {
                const v2SubscriberClass = subscriber_1.SubscriberV2.from(subscriber, 'v2');
                const instance = new v2SubscriberClass();
                return [v2SubscriberClass, instance.metadata];
            }
            case 'v3':
                const v2SubscriberClass = subscriber_1.SubscriberV2.from(subscriber, 'v3');
                const instance = new v2SubscriberClass();
                return [v2SubscriberClass, instance.metadata];
        }
    }
}
exports.default = SubscriberLoader;
