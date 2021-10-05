---
id: graceful-shutdown
title: Graceful Shutdown
sidebar_position: 3
---

When gracefully shutting down a process, it is a good idea to first close all open subscriptions and DB connections. For this reason we have a static `closeAll` method in the `SubscriptionService` that can close all connections before shutting down. An example using it with process signal handlers:

```ts {28-41} title="/pubsub/subscription.service.ts"
import * as PubSub from '@honestfoodcompany/pubsub';
import mongoose from 'mongoose';
import { SubscriberOptions } from '@honestfoodcompany/pubsub';

export default class SubscriptionService extends PubSub.SubscriptionService {
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
