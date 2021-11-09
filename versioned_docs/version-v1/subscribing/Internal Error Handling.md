---
id: error-handling
title: Internal Error Handling
sidebar_label: Error Handling
sidebar_position: 2
---

To handle any internal error that might occur on pubsub side, a the method `handleError` can be declared either in Subscriber Object or in SubscriptionService level.

- If the error handler is provided at `Subscriber` object level then it would override the error handler provided at `SubscriptionService` level.

## Subscriber handleError Examples

### Typescript subscription example

```ts title="/pubsub/subscriptions/simple.topic.name.console-log.sub.ts"
import { SubscriberObject, Message } from "@honestfoodcompany/pubsub";

export default: SubscriberObject = {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.sub',
  description: 'Will console log messages published on test.topic',

  handleMessage: function(message: Message): void {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },

  handleError: function(error: Error): void {
    // internal error handling logic for subscriber
    console.error(error);
    // Close DB connections/etc here
    process.exit(1);
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
  handleError: function (error) {
    // internal error handling logic for subscriber
    console.error(error);
    // Close DB connections/etc here
    process.exit(1);
  },
};
```

## SubscriptionService handleError Examples

### Typescript subscription example

```ts title="/pubsub/subscription.service.ts"
import * as PubSub from '@honestfoodcompany/pubsub';
import { SubscriberOptions } from '@honestfoodcompany/pubsub';

export default class SubscriptionService extends PubSub.SubscriptionService {
  static subscribers = [
    //...
  ];

  static defaultSubscriberOptions: SubscriberOptions = {};

  static async init(): Promise<void> {}

  static handleError(error: Error): void {
    // global default error handling logic for all subscribers
    console.error(error);
    // Close DB connections/etc here
    process.exit(1);
  }
}
```

### Javascript subscription example

```js title="/pubsub/subscription.service.js"
const PubSub = require('@honestfoodcompany/pubsub');

class SubscriptionService extends PubSub.SubscriptionService {}

SubscriptionService.subscribers = [];

SubscriptionService.defaultSubscriberOptions = {};

SubscriptionService.init = () => {};

SubscriptionService.handleError = (error) => {
  // global default error handling logic for all subscribers
  console.error(error);
  // Close DB connections/etc here
  process.exit(1);
};

exports.default = SubscriptionService;
```
