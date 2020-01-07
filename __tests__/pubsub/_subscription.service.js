'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const pubsub_1 = require('../../dist');
const ExampleSubscription = require('./subscriptions/example.subscription');

class SubscriptionService extends pubsub_1.SubscriptionService {}
SubscriptionService.subscribers = [ExampleSubscription];

exports.default = SubscriptionService;
