# Google Pub/Sub Framework
A small framework for publishing and subscribing to messages on Google PubSub.

## Features

1. CLI tool for starting subscription server and for listing subscriptions
2. Define your subscription handlers with a simple object
3. Create new topics and publish a message to those topics in 2 lines

## Table of Contents
- [Google Pub/Sub Framework](#google-pubsub-framework)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Adding a new subscription message handler](#adding-a-new-subscription-message-handler)
  - [Running subscription server](#running-subscription-server)
  - [Publishing a Message](#publishing-a-message)
  - [Subscribing to a Topic](#subscribing-to-a-topic)
  - [Connecting to a database](#connecting-to-a-database)
  - [Enabling Synchronous Driver](#enabling-synchronous-driver)


## Prerequisites

1. This module expects that you've created a pubsub directory in your project with the following structure:

```pre
| .env        <-- this can be in your project root director
| - pubsub    <-- this can be anywhere (defined in .env)
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

`GOOGLE_APPLICATION_CREDENTIALS` see https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account to generate this

`GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` name of the project in Google Cloud Platform

## Adding a new subscription message handler

1. Add your subscriber in `pubsub/subscriptions/name.of.subscription.sub.js`. By default, the subscriptions server will load all subscribers found in  `PUBSUB_ROOT_DIR/subscriptions` that are suffixed with `.sub` such as `pubsub/subscriptions/order.received.sub.js`. 

Note: As a convention the name of the file should match the name of the subscription so the file structure is self-documenting.


```javascript
// path/to/your/pubsub/subscriptions/simple.topic.name.subscription.sub.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',
  options: {
    ackDeadline: 30, // in seconds
    flowControl: {
      maxMessages: 500,
    },
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`)
    console.log(message.data.toString());
  },
};
```

## Running subscription server

1. Run subscriptions `npx subscriptions start` or `./node_modules/.bin/subscriptions start`
2. List subscriptions `npx subscriptions list` or `./node_modules/.bin/subscriptions list`

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

Create a `Subscriber`  which defines a message handler function to run for each message that arrives on the corresponding topic. A new instance will be created for each message published on the topic.

1. Create a subscriber in `path/to/your/pubsub/subscriptions`

Typescript example:

```typescript
// path/to/your/pubsub/subscriptions/simple.topic.name.subscription.sub.ts
import { SubscriberObject, Message } from "@honestfoodcompany/pubsub"; // optional, just to import the interface
export default: SubscriberObject = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.subscription',
  description: 'Will console log messages published on test.topic',
  options: {
    ackDeadline: 30, // in seconds
    flowControl: {
      maxMessages: 500,
    },
  },
  handleMessage: function(message: Message): void {
    console.log(`received a message on ${this.subscriptionName}`)
    console.log(message.data.toString());
  },
};

```

Javascript example:

```javascript
// path/to/your/pubsub/subscriptions/simple.topic.name.subscription.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.subscription',
  description: 'Will console log messages published on test.topic',
  options: {
    ackDeadline: 30, // in seconds
    flowControl: {
      maxMessages: 500,
    },
  },
  handleMessage: function(message) {
    console.log(`received a message on ${this.subscriptionName}`)
    console.log(message.data.toString());
  },
};
```

2. Start your subscriptions `./node_modules/.bin/subscriptions start`

## Connecting to a database

If you would like your subscription handlers to connect to a database but don't want to create a new one connection for each message that is received, you must include a `subscription.service` file in your `PUBSUB_ROOT_DIR` whose `init` function connects to your database:

```typescript
import { connect } from "mongoose";
import { SubscriptionService as BaseSubscriptionService } from "@honestfoodcompany/pubsub";
import ExampleSubscriber from "./subscriptions/example.subscriber";

export default class SubscriptionService extends BaseSubscriptionService {
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

## Enabling Synchronous Driver

If you would like to bypass Google PubSub and run your subscriptions synchronously (for development purposes) set the following environment variable:

`PUBSUB_DRIVER=synchronous`
