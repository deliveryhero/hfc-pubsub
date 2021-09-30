Object.defineProperty(exports, '__esModule', { value: true });
const pubsub = require('@honestfoodcompany/pubsub');
const {
  default: ExampleSubscription,
} = require('./subscriptions/test-topic.example.subscription');
const {
  default: ExampleSubscriptionOverride,
} = require('./subscriptions/test-topic.example.override-options.subscription');
const {
  default: ExampleSubscriptionOverrideDLQ,
} = require('./subscriptions/test-topic.example.override-options-with-deadletter.subscription');
const {
  default: ExampleSubscriptionWithCustomCredentials,
} = require('./subscriptions/test-topic.example.with-custom-credentials.subscription');

class SubscriptionService extends pubsub.SubscriptionService {
  static subscribers = [
    ExampleSubscription,
    ExampleSubscriptionOverride,
    ExampleSubscriptionOverrideDLQ,
    ExampleSubscriptionWithCustomCredentials,
  ];

  /**
   * @type {pubsub.SubscriberOptions}
   */
  static defaultSubscriberOptions = {
    ackDeadline: 145,
    flowControl: {
      maxMessages: 134,
    },
    deadLetterPolicy: {
      deadLetterTopic: 'global.deadletter',
      maxDeliveryAttempts: 15,
    },
    retryPolicy: {
      minimumBackoff: {
        seconds: 40,
      },
      maximumBackoff: {
        seconds: 120,
      },
    },
  };
}

exports.default = SubscriptionService;
