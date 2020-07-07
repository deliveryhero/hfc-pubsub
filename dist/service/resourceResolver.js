"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class ResourceResolver {
    static getFiles() {
        const dir = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscriptions');
        const subscriptionService = path_1.resolve(process.env.PUBSUB_ROOT_DIR || '', 'subscription.service.js');
        return [subscriptionService, dir];
    }
}
exports.ResourceResolver = ResourceResolver;
