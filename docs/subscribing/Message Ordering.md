---
id: message-ordering
title: Subscription with Message Ordering
sidebar_label: Message Ordering
sidebar_position: 3
---

Messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

```js title="/pubsub/subscriptions/simple.topic.name.subscription.sub.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',
  options: {
    enableMessageOrdering: true,
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
```
