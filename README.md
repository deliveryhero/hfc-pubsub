# Google Pub/Sub Node.js Framework

This package contains a lightweight framework for [Google Pub/Sub](https://cloud.google.com/pubsub). It was created to speed up development time and it provides a common foundation for building event driven applications. It lets developers define topics and subscriptions simply and declaratively, while additionally offering a simple subscription server to run all of a project's subscription handlers.

## Table of Contents

- [Google Pub/Sub Node.js Framework](#google-pubsub-nodejs-framework)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting started](#getting-started)
  - [Running subscription server](#running-subscription-server)
  - [Topics](#topics)
    - [Publishing a message (simple example)](#publishing-a-message-simple-example)
      - [Typescript example](#typescript-example)
      - [Javascript example](#javascript-example)
    - [Publishing a message with retry settings](#publishing-a-message-with-retry-settings)
  - [Subscriptions](#subscriptions)
    - [Typescript subscription example](#typescript-subscription-example)
    - [Javascript subscription example](#javascript-subscription-example)
    - [Subscription example with subscriber options](#subscription-example-with-subscriber-options)
    - [Subscription with a Deadletter Policy](#subscription-with-a-deadletter-policy)
  - [Subscriber Options](#subscriber-options)
  - [Connecting to a database](#connecting-to-a-database)
  - [Enabling Synchronous Driver](#enabling-synchronous-driver)

## Features

1. Run all of your subscriptions at once with a subscription server
2. Define pub/sub subscriptions and topics in a declarative way
3. Define your subscription handlers with a simple object
4. Get started quickly: define a topic and publish messages with a few lines of code
   
## Getting started

The framework expects that you've created a pubsub directory in your project with the following structure:

```pre
| .env        <-- this should be in your project root directory
| - pubsub/    <-- this can be anywhere (defined in .env as PUBSUB_ROOT_DIR)
|   | - subscriptions/
|   | - topics/
```

add the following to your `.env`

```ini
GOOGLE_APPLICATION_CREDENTIALS=/path/to/gcp-project-83d5537a8388-key.json
GOOGLE_CLOUD_PUB_SUB_PROJECT_ID=gcp-project-id
PUBSUB_ROOT_DIR=/path/to/your/pubsub/directory # this can be a relative path
```

`PUBSUB_ROOT_DIR` must be the path to your project's pubsub directory. This module only works with compiled JS, so if you are writing your code in typescript, you must set this variable to the pubsub root in your project's build directory.

`GOOGLE_APPLICATION_CREDENTIALS` see https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account to generate this

`GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` name of the project in Google Cloud Platform

## Running subscription server

Install npx if you don't have it installed yet: `npm i -g npx`

1. Run subscriptions `npx subscriptions start`
2. List subscriptions `npx subscriptions list`

Note: If the subscription doesn't exist in google pub/sub it will be created when you run `npx subscriptions start`

## Topics

Create a topic in `PUBSUB_ROOT_DIR/topics` which extends `Topic` and a payload which extends `BasePayload`

```typescript
// PUBSUB_ROOT_DIR/topics/simple.topic.name.ts
import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

export default class SimpleTopic extends Topic {
  readonly name = 'simple.topic.name';
}

export interface Payload extends BasePayload {
  id: number;
  data: string;
}
```

> As a convention, the name of the topic file should match the name of the topic name so the file directory becomes self-documenting.

### Publishing a message (simple example)

If a topic does not exist, it will be created before a message is published.

#### Typescript example

```typescript
// client.example.ts
import SimpleTopic, { Payload } from "PUBSUB_ROOT_DIR/topics/simple.topic.name";

new SimpleTopic()
  .publish<Payload>({ id: 1, data: "My first message" });

```

#### Javascript example

```typescript
// client.example.ts
import SimpleTopic from "PUBSUB_ROOT_DIR/topics/simple.topic.name";

new SimpleTopic()
  .publish({ id: 1, data: "My first message" });

```

### Publishing a message with retry settings

see [Sample Topic with Retry Settings](examples/typescript/test.topic.withRetrySettings.ts) for defining a default retry policy

```typescript
// client.example.ts
import SimpleTopic, { Payload } from 'pubsub/topics/simple.topic.name';

let topic = new SimpleTopic();
topic.publish<Payload>(
  { id: 1, data: 'My first message' },
  {
    retryCodes: [10, 1],
    backoffSettings: {
      initialRetryDelayMillis: 100,
    },
  },
);
```

## Subscriptions

Create a `Subscriber`  to define a message handler for messages that are published on the corresponding topic.

Subscribers are contained in `PUBSUB_ROOT_DIR/subscriptions`.

> Files ending in `.pub.js` in `PUBSUB_ROOT_DIR/subscriptions` will be autoloaded by the subscription server.

### Typescript subscription example

```typescript
// PUBSUB_ROOT_DIR/subscriptions/simple.topic.name.console-log.sub.ts
import { SubscriberObject, Message } from "@honestfoodcompany/pubsub"; // this import is optional, it's gives us the interfaces to use below

export default: SubscriberObject = {
  topicName: 'simple.topic',
  subscriptionName: 'simple.topic.console-log.sub',
  description: 'Will console log messages published on test.topic',

  handleMessage: function(message: Message): void {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};

```

### Javascript subscription example

```javascript
// PUBSUB_ROOT_DIR/subscriptions/simple.topic.name.sub.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',

  handleMessage: function(message) {
    console.log(this.subscriptionName, 'received message');
    console.log(message.data.toString());
    message.ack();
  },
};
```


### Subscription example with [subscriber options](#subscriber-options)

```javascript
// PUBSUB_ROOT_DIR/subscriptions/simple.topic.name.subscription.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.subscription',
  description: 'Will console log messages published on test.topic',
  options: {
    flowControl: {
      maxMessages: 500, // max messages in progress
    },
  },
  handleMessage: function(message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
    message.ack();
  },
};
```

### Subscription with a Deadletter Policy

It is possible to define a deadltter policy for a subscription. If the dead letter topic does not exist, it will be created automatically by the framework.

```javascript
// PUBSUB_ROOT_DIR/subscriptions/simple.topic.sub.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',
  options: {
    deadLetterPolicy: {
      deadLetterTopic: 'test.deadletter.topic',
      maxDeliveryAttempts: 15,
    },
  },
  handleMessage: function(message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
```

## Subscriber Options

[Usage Example](#with-subscriber-options)

```typescript
interface SubscriberOptions {
  ackDeadline?: number;
  batching?: {
    callOptions?: CallOptions; // see https://github.com/googleapis/gax-nodejs/blob/77f16fd2ac2f1bd90cc6abfcccafa94a20582017/src/gax.ts#L114
    maxMessages?: number;
    maxMilliseconds?: number;
  };
  flowControl?: {
    allowExcessMessages?: boolean;
    maxBytes?: number;
    maxExtension?: number;
    maxMessages?: number;
  };
  streamingOptions?: {
    highWaterMark?: number;
    maxStreams?: number;
    timeout?: number;
  };
  deadLetterPolicy: {
    deadLetterTopic: string;
    maxDeliveryAttempts: number;
  };
}
```

## Connecting to a database

If you have several subscribers that require a database connection, it is recommended to connect to a database in the `subscription.service` file in your `PUBSUB_ROOT_DIR`. Insert your database connection logic in  the `init` method.

```typescript
// PUBSUB_ROOT_DIR/subscription.service.ts

import { connect } from "mongoose";
import { SubscriptionService as BaseSubscriptionService } from "@honestfoodcompany/pubsub";

export default class SubscriptionService extends BaseSubscriptionService {
  /**
   * connect to mongoose
   */
  static async init(): Promise<void> {
    console.log('Connecting to MongoDB');
    const mongoURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : '';
    await connect(mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`Connected to MongoDB at ${mongoURI}`));
  }
}
```

## Enabling Synchronous Driver

If you would like to bypass Google PubSub and run your subscriptions synchronously (for development purposes) set the following environment variable:

`PUBSUB_DRIVER=synchronous`
