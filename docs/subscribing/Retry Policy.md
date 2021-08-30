---
id: retry-policy
title: Subscriptions with Retry Policy
sidebar_label: Retry Policy
sidebar_position: 2
---

It is possible to define a retry configuration for a subscription:

```js title="/pubsub/subscriptions/simple.topic.name.subscription.sub.js"
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',
  options: {
    retryPolicy: {
      minimumBackoff: { seconds: 20, nanos: 20 },
      maximumBackoff: { seconds: 400, nanos: 2 },
    },
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
```
