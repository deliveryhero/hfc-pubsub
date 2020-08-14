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
const ExampleSubscriptionV3_3 = require('./subscriptions//example.v3_3.subscription')
  .default;
const ExampleSubscriptionV2Override = require('./subscriptions//example.v2_overrideoptions.subscription')
  .default;
const ExampleSubscriptionV2RetryConfig = require('./subscriptions/example.v2_retryconfig.subscription')
  .default;
const ExampleSubscriptionV3Override = require('./subscriptions//example.v3_overrideoptions.subscription')
  .default;

class SubscriptionService extends pubsub_1.SubscriptionService {}
SubscriptionService.subscribers = [
  ExampleSubscription,
  ExampleSubscriptionV2,
  ExampleSubscriptionV3,
  ExampleSubscriptionV3_2,
  ExampleSubscriptionV3_3,
  ExampleSubscriptionV2Override,
  ExampleSubscriptionV2RetryConfig,
  ExampleSubscriptionV3Override,
];

exports.default = SubscriptionService;
