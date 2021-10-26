---
id: dead-letter-policy
title: Subscriptions with a Dead-letter Policy
sidebar_label: Dead Letter Policy
sidebar_position: 1
---

It is possible to define a dead-letter policy for a subscription. If the dead letter topic does not exist, it will be created automatically by the framework.

```js title="/pubsub/subscriptions/simple.topic.sub.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',
  options: {
    deadLetterPolicy: {
      deadLetterTopic: 'test.topic.sub.dlq',
      maxDeliveryAttempts: 15,
      createDefaultSubscription: true,
    },
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
```

## Binding Subscriber and Publisher role

The framework will automatically attach a Publisher & Subscriber role to your dead letter queue, just add a DLQ config and make sure your service account has the roles defined [here](../Guides/Drivers#google-pubsub-driver).

:::tip
  Binding the above policies don't require current subscriptions to be deleted and recreated.
:::

This is following the [best practices defined by Google here](https://cloud.google.com/pubsub/docs/handling-failures#granting_forwarding_permissions)

## Checking for subscribers to DLQ topic

A dead letter topic is not useful without a subscription for it, because without it all messages are just lost to the void.

To avoid this scenario, we automatically check for subscriptions on the DLQ topic and warn in case the DLQ topic **doesn't have any subscriptions**. Example warning:

```sh
Please set createDefaultSubscription: true in deadLetterPolicy to create default subscriber for dead letter topic of simple.topic.console-log.subscription-with-options. Ignore if already added subscription for it.
```

### Automatically creating default subscribers

To make it easy to set this up, we have a option `createDefaultSubscription` that will automatically create a default dead letter subscription with name having `.default` added to the `deadLetterTopic`.

For example, if deadLetterTopic is `example.test.dlq` then a subscription called `example.test.dlq.default` will be automatically created if `createDefaultSubscription` is true.
