"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscriber_1 = require("../subscriber");
const path_1 = require("path");
const fs = require("fs");
class SubscriberLoader {
    loadSubscribersFromDirectory(dir) {
        var _a;
        const subscriptionFiles = fs
            .readdirSync(dir)
            .filter((file) => {
            return file.match(/\.js$/);
        });
        for (const file of subscriptionFiles) {
            const subscription = require(path_1.resolve(dir, file)).default;
            (_a = this.subscribers) === null || _a === void 0 ? void 0 : _a.push(subscription);
        }
        return this.subscribers || [];
    }
    loadSubscribersFromService(subscriptionService, init = false) {
        const service = require(path_1.resolve(subscriptionService)).default;
        if (init)
            service.init();
        service.subscribers.map((subscriber) => {
            var _a;
            const version = subscriber_1.SubscriberV2.getSubscriberVersion(subscriber) || '';
            (_a = this.subscribers) === null || _a === void 0 ? void 0 : _a.push(this.loadSubscriber(subscriber, version));
        });
        return this.subscribers || [];
    }
    loadSubscriber(subscriber, version) {
        switch (version) {
            case 'v1': {
                const v2Subscriber = subscriber_1.SubscriberV2.from(subscriber, 'v1');
                return [
                    v2Subscriber,
                    new v2Subscriber().metadata,
                ];
            }
            case 'v2': {
                const v2Subscriber = subscriber_1.SubscriberV2.from(subscriber, 'v2');
                return [
                    v2Subscriber,
                    new v2Subscriber().metadata,
                ];
            }
            case 'v3':
                const v2Subscriber = subscriber_1.SubscriberV2.from(subscriber, 'v3');
                return [
                    v2Subscriber,
                    new v2Subscriber().metadata,
                ];
        }
    }
    loadSubscribersFromJson(jsonFile) {
        const subscribersFile = require(jsonFile);
        if (typeof subscribersFile.subscribers == 'undefined') {
            throw Error('subscribers.json is invalid. Make sure that subscribers key is defined');
        }
        const subscribers = subscribersFile.subscribers;
        Object.keys(subscribers).forEach((key) => {
            var _a;
            const pathToSubscribers = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions', `${subscribers[key]}.js`);
            if (!fs.existsSync(pathToSubscribers)) {
                console.log(`Could not find subscription: ${subscribers[key]}.js`);
                return;
            }
            const subscription = require(pathToSubscribers).default;
            (_a = this.subscribers) === null || _a === void 0 ? void 0 : _a.push(subscription);
        });
        return this.subscribers || [];
    }
}
exports.default = SubscriberLoader;
