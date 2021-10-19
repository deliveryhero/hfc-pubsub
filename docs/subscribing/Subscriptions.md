---
id: subscriptions
title: Subscriptions
sidebar_position: 0
---

Create a `Subscriber` to define a message handler for messages that are published on the corresponding topic.

Subscribers are contained in `PUBSUB_ROOT_DIR/subscriptions`.

:::tip
Files ending in `.sub.js` or `.sub.ts` in `PUBSUB_ROOT_DIR/subscriptions` will be autoloaded by the subscription server.
:::

## Examples

### Typescript subscription example

```ts title="/pubsub/subscriptions/simple.topic.name.console-log.sub.ts"
import { SubscriberObject } from "@honestfoodcompany/pubsub"; 
import { Payload } from '../topics/test-topic';

export default: SubscriberObject<Payload> = {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.sub',
  description: 'Will console log messages published on test.topic',

  handleMessage: function(message): void {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    const payload = message.toJSON();
    message.ack();
  },

  handleError: function(error: Error): void {
    // default error handler for subscriber
  }
};

```

### Javascript subscription example

```js title="/pubsub/subscriptions/simple.topic.name.sub.js"
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',

  handleMessage: function (message) {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};
```

### Subscription example with custom [subscriber options](#subscriber-options)

```js title="/pubsub/subscriptions/simple.topic.name.subscription.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.subscription',
  description: 'Will console log messages published on test.topic',
  options: {
    flowControl: {
      maxMessages: 500, // max messages in progress
    },
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
    message.ack();
  },
};
```

## Subscriber Options

See full options available in [API Docs](../api/interfaces/subscriberoptions).
