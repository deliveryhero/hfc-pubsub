---
id: connect-database
title: Connecting to a Database
sidebar_label: Connect Database
sidebar_position: 2
---

It is recommended to initialize a database connection in the `subscription.service` file in your `PUBSUB_ROOT_DIR`. Insert your database connection logic in the `init` method.

```ts title="/pubsub/subscription.service.ts"
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

```
