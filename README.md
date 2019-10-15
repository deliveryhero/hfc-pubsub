# HFC Google Pub/Sub Module
A slightly opinionated, micro-framework for publishing and subscribing to messages on Google PubSub. 

## Features

1. CLI tool for starting subscription server and for listing subscriptions
2. Create new topics and publish a message to those topics in 2 lines
3. Automatic timestamping of all messages (ISO8601)

## Prerequisites Requirements

1. This module expects that you've created a pubsub directory in your project with the following structure:

```pre
| - pubsub
|   | - subscriptions
|   | - topics
```

2. add the following to your `.env`

```ini
GOOGLE_APPLICATION_CREDENTIALS=/path/to/hfc-experiments-83d5537a8388-key.json
GOOGLE_CLOUD_PUB_SUB_PROJECT_ID="hfc-experiments"
PUBSUB_ROOT_DIR=/path/to/module/pubsub
```

`PUBSUB_ROOT_DIR` must be the path to your project's pubsub directory. This module only works with compiled JS, so if you are writing your code in typescript, you must set this variable to the pubsub root in your project's build directory.

## Adding a new subscription

1. Add your subscription in `pubsub/subscriptions/name.of.pubsub.subscription` (Follow the template examples)

As a convention the name of the file should match the name of the subscription so the file structure is self-documenting.

2. (Optional): By default, the subscriptions server will load all subscriptions found in  `PUBSUB_ROOT_DIR/subscriptions`, however you can explicitly define which subscriptions the server should run by including a `subscriptions.json` file in `PUBSUB_ROOT_DIR/subscriptions.json` or by including a `PUBSUB_ROOT_DIR/subscriptions.service.js` file. Examples are found below.

## Running subscription handlers

1. Run subscriptions `./node_modules/.bin/subscriptions start`
2. List subscriptions `./node_modules/.bin/subscriptions list`

Note: If the subscription doesn't exist in google pub/sub it will be created when you run `./node_modules/.bin/subscriptions start`

## Publishing a Message

1. Create a topic in `pubsub/topics` which extends `Topic` and a payload which extends `BasePayload`

```typescript
// @lib/pubsub/topics/simple.topic.name.ts
import { Topic, Payload as BasePayload } from "@honestfoodcompany/pubsub";

export default class SimpleTopic extends Topic {
  public readonly name = "simple.topic.name";
}

export interface Payload extends BasePayload {
  id: number;
  data: string;
}
```

> As a convention the name of the topic file should match the name of the topic name so the code and file structure becomes self-documenting.

2. Compose your message and publish it

```typescript
// client.example.ts
import SimpleTopic, { Payload } from "pubsub/topics/simple.topic.name";

let topic = new SimpleTopic();
topic.publish<Payload>({ id: 1, data: "My first message" });

// publishing message: on simple.topic.name
// { "id": 1, "data": "My first message", "_timestamp":"2019-09-12T09:19:30.310Z"}
```

If a topic does not exist yet with the name you defined, it will be created before the message is sent.

## Subscribing to a Topic

1. Create a subscription class in `path/to/your/pubsub/subscriptions`

Typescript example:

```typescript
// path/to/your/pubsub/subscriptions/simple.topic.name.subscription.ts

import { Subscription, Message } from "@honestfoodcompany/pubsub";

export default class SimpleSubscription extends Subscription {
  public topicName: string = "simple.topic.name";
  public subscriptionName: string = "simple.topic.name.subscription";
  public description: string = "Example subscription client";

  public init(): void {
    // set your instance properties here
  }
  public async handleMessage(message: Message): Promise<void> {
    console.log(`Received message:`, message.data.toString());
    // Do stuff with your message here
    message.ack();
  }
}
```

Javascript example:

```javascript
// path/to/your/pubsub/subscriptions/simple.topic.name.subscription.js
const PubSub = require("@honestfoodcompany/pubsub");
class TestSubscription extends PubSub.Subscription {
    constructor() {
        super(...arguments);
        this.topicName = "test-topic";
        this.subscriptionName = "test-topic.subscription";
        this.description = "Just a test subscription";
    }
    async handleMessage(message) {
        const payload = JSON.parse(message.data.toString());
        message.ack();
    }
}
exports.default = TestSubscription
```

2. Start your subscriptions `./node_modules/.bin/subscriptions start`

## Registering your subscription with the `SubscriptionService` (optional)

If you would like to incorporate dependency injection or extend the default behavior of the `SubscriptionService` you may create your own `SubscriptionService` which extends the base service like in the example below:

```typescript
// path/to/your/pubsub/subscriptions.service.ts

import { SubscriptionService as BaseSubscriptionService } from "@honestfoodcompany/pubsub";
import SimpleSubscription from "path/to/your/pubsub/subscriptions/simple.topic.name.subscription";

export default class SubscriptionService extends BaseSubscriptionService {
  /**
   * Add subscriptions to this array to register them
   */
  public static subscriptions = [new SimpleSubscription()];
}
```

## Connecting to Mongoose

If you would like to connect to mongoose, you must include a `subscription.service` file in your `PUBSUB_ROOT_DIR` like this:

```typescript
import { connect } from "mongoose";
import { SubscriptionService as BaseSubscriptionService } from "@honestfoodcompany/pubsub";
import ExampleSubscription from "./subscriptions/example.subscription";
import chalk from "chalk";

export default class SubscriptionService extends BaseSubscriptionService {
  /**
   * Add subscriptions to this array to register them
   */
  public static subscriptions = [new ExampleSubscription()];

  /**
   * connect to mongoose
   */
  public static async init(): Promise<void> {
    console.log(chalk.bold.blue("Connecting to MongoDB"));
    const mongoURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
    await connect(
      mongoURI,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      },
    );
    console.log(chalk.bold.green(`Connected to MongoDB at ${mongoURI}`));
  }
}
```

## Registering your subscription with `subscriptions.json` (optional)

If you prefer to explicitly define the subscriptions that the subscription server runs, you can define those subscriptions in `subscriptions.json`. Otherwise if no `subscriptions.json` file is set, and no `subscription.service.js` file defined, the subscription server's default behavior is to load all the `.js` files in `PUBSUB_ROOT_DIR/subscriptions`.

```json
// PUBSUB_ROOT_DIR/subscriptions.json
{
    "subscriptions": {
        "TestSubscription": "test.subscription"
    }
}
```

This configuration will enable the subscription found in `PUBSUB_ROOT_DIR/subscriptions/test.subscription.js`. The key can be any string value. The value in the key-value pair is the name of the subscription file found in `PUBSUB_ROOT_DIR/subscriptions` without the `.js` extension.
