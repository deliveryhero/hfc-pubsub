---
id: service
title: Subscription Service
sidebar_position: 0
---

Extend and customize the behavior of the subscription server in the `subscription.service` file. Initialize a database connection, register subscribers, and **define default subscriber** options in the subscription service file.

## Typescript example

```ts title="/pubsub/subscription.service.ts"
import * as PubSub from '@honestfoodcompany/pubsub';
import { SubscriberOptions } from '@honestfoodcompany/pubsub';

export default class SubscriptionService extends PubSub.SubscriptionService {
  static subscribers = [
    /**
     * if your subscribers don't have the .sub.js suffix
     * they won't be auto-loaded,  so you can include their default
     * export in  this array
     */
  ];

  static defaultSubscriberOptions: SubscriberOptions = {
    /**
     * Define project level default subscriber options here.
     * These options can be overridden by options defined in subscribers
     */
  };

  static async init(): Promise<void> {
    /**
     * This function is called when the subscription server starts.
     * This is a good place to initialize a database connection
     */
  }
}
```

## Javascript Example

```js title="/pubsub/subscription.service.js"
const PubSub = require('@honestfoodcompany/pubsub');

class SubscriptionService extends PubSub.SubscriptionService {}

SubscriptionService.subscribers = [
  /**
   * if your subscribers don't have the .sub.js suffix
   * they won't be auto-loaded,  so you can include their default
   * export in  this array
   */
];

SubscriptionService.defaultSubscriberOptions = {
  /**
   * Define project-level default subscriber options here.
   * These options can be overridden by options defined in subscribers
   */
};

SubscriptionService.init = () => {
  /**
   * This function is called when the subscription server starts.
   * This is a good place to initialize a database connection
   */
};

exports.default = SubscriptionService;
```

## Running the Service

To run the service you can use the [CLI](../CLI.md) commands:

```sh
npx subscriptions start
```
