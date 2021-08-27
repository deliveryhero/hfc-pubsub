---
id: service
title: Subscription Service
sidebar_position: 4
---

Extend and customize the behavior of the subscription server in the subscription service file. Initialize a database connection, register subscribers, and define default subscriber options in the subscription service file.

## Typescript example

```ts title="/pubsub/subscription.service.ts"
import * as PubSub from '@honestfoodcompany/pubsub';
import { SubscriberOptions } from '@honestfoodcompany/pubsub';

/**
 * This function call is optional, you can pass an instance of Pino, Winston logger
 * By default it uses default console.* for logging
 * The logger you pass must support .error, .info and .warn methods for it to work
 */
PubSub.setLogger(console);

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

## Options

### Passing a custom Logger

In the main SubscriptionService before defining subscription class you can update the logger that is being used by the package for logging. It's an optional definition and by default it uses `console.*` for logging `.info`, `.warn` and `.error` these 3 function keys are a must have for the logger you pass.

```ts
import { setLogger } from '@honestfoodcompany/pubsub';
setLogger(console);
```

```js
const { setLogger } = require('@honestfoodcompany/pubsub');
setLogger(console);
```

### Connecting to a database

It is recommended to initialize a database connection in the `subscription.service` file in your `PUBSUB_ROOT_DIR`. Insert your database connection logic in the `init` method.

### Graceful Shutdown

When gracefully shutting down a process, it is a good idea to first close all open subscriptions. For this reason we have a static `closeAll` method in the `SubscriptionService` that can close all connections before shutting down. An example using it with process signal handlers:

```ts {28-41} title="/pubsub/subscription.service.ts"
import * as PubSub from '@honestfoodcompany/pubsub';
import mongoose from 'mongoose';
import { SubscriberOptions } from '@honestfoodcompany/pubsub';

export default class SubscriptionService extends PubSub.SubscriptionService {
  static subscribers = [
    /**
     * if your subscribers don't have the .sub.js suffix
     * they won't be auto-loaded,  so you can include their default
     * export in  this array
     */
  ];

  /**
   * This function is called when the subscription server starts.
   */
  static async init(): Promise<void> {
    /**
     * This is a good place to initialize a database connection
     */
    await mongoose.connect();
  }
}

/**
 * Example setting up graceful shutdown
 */
process.on('SIGTERM', () => {
  // First close all subscriptions
  SubscriptionService.closeAll()
    .then(() => {
      // Then the databse so no new handlers are triggered
      mongoose.disconnect(() => {
        process.exit(0);
      });
    })
    .catch((err) => {
      console.error(err, 'Could not close subscriptions');
      process.exit(1); // Exit with error
    });
});
```
