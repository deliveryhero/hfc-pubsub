/* eslint-disable @typescript-eslint/camelcase */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const pubsub_1 = require('../../dist');
const ExampleSubscription = require('./subscriptions/example.subscription')
  .default;
const ExampleSubscriptionV2 = require('./subscriptions/example.v2.subscription')
  .default;
const ExampleSubscriptionV3 = require('./subscriptions/example.v3.subscription')
  .default;
const ExampleSubscriptionV3_2 = require('./subscriptions/example.auto-load.subscription-2.sub')
  .default;

class SubscriptionService extends pubsub_1.SubscriptionService {}
SubscriptionService.subscribers = [
  ExampleSubscription,
  ExampleSubscriptionV2,
  ExampleSubscriptionV3,
  ExampleSubscriptionV3_2,
];

exports.default = SubscriptionService;
