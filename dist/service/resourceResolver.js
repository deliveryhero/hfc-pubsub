"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class ResourceResolver {
    static getFiles() {
        const dir = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
        const subscriptionService = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscription.service.js');
        const subscribersJson = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscribers.json');
        return [subscriptionService, subscribersJson, dir];
    }
}
exports.ResourceResolver = ResourceResolver;
