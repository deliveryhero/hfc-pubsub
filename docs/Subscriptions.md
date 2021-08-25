---
id: subscriptions
title: Subscriptions
sidebar_position: 3
---

Create a `Subscriber` to define a message handler for messages that are published on the corresponding topic.

Subscribers are contained in `PUBSUB_ROOT_DIR/subscriptions`.

> Files ending in `.sub.js` in `PUBSUB_ROOT_DIR/subscriptions` will be autoloaded by the subscription server.

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

  handleMessage: function (message) {
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
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
    message.ack();
  },
};
```

### Subscription with a Dead-letter Policy

It is possible to define a dead-letter policy for a subscription. If the dead letter topic does not exist, it will be created automatically by the framework. There needs to be a `PROJECT_NUMBER` defined for dead letter to pick up publisher, subscriber role or we use the Project ID to fetch it. `createDefaultSubscription` will create a default dead letter subscription with name having `.default` added to `deadLetterTopic`. Check [Binding Subscriber and Publisher role](#binding-subscriber-and-publisher-role) for more details

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
      createDefaultSubscription: true,
    },
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
```

### Binding Subscriber and Publisher role

To automatically have a Publisher,Subscriber role attached to your dead letters you need to add `PROJECT_NUMBER` in the env list. If this `PROJECT_NUMBER` isn't available in env then it'll use `GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` to fetch it.
Binding the above policies don't require current subscriptions to be deleted.

To find out project number through CLI use the commands below:

- `PROJECT=$(gcloud config get-value project)`
- `gcloud projects list --filter="$PROJECT" --format="value(PROJECT_NUMBER)"`

### Subscription with Retry Policy

It is possible to define a retry configuration for a subscription:

```javascript
// PUBSUB_ROOT_DIR/subscriptions/simple.topic.name.subscription.sub.js
exports.default = {
  topicName: 'test.topic',
  subscriptionName: 'test.topic.sub',
  description: 'Will console log messages published on test.topic',
  options: {
    retryPolicy: {
      minimumBackoff: { seconds: 20, nanos: 20 },
      maximumBackoff: { seconds: 400, nanos: 2 },
    },
  },
  handleMessage: function (message) {
    console.log(`received a message on ${this.subscriptionName}`);
    console.log(message.data.toString());
  },
};
```

### Subscription with Message Ordering

Messages published with the same `ordering_key` in `PubsubMessage` will be delivered to the subscribers in the order in which they are received by the Pub/Sub system.

```javascript
// PUBSUB_ROOT_DIR/subscriptions/simple.topic.name.subscription.sub.js
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

## Subscriber Options

[Usage Example](#subscription-example-with-subscriber-options)

```typescript
interface SubscriberOptions {
  /**
   * override the default project settings from the environment variable
   * and use the project defined here instead for the subscription
   **/
  project?: {
    id: string;
    credentials: {
      client_email?: string;
      private_key?: string;
    };
  };

  /**
   * in seconds
   **/
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
  deadLetterPolicy?: {
    deadLetterTopic: string;
    maxDeliveryAttempts: number;
  };
  retryPolicy?: {
    minimumBackoff: { seconds: number; nanos?: number }; // "10s"-"599s"
    maximumBackoff: { seconds: number; nanos?: number }; // "11s"-"600s"
  };

  /**
   *   An expression written in the Pub/Sub [filter
   *   language](https://cloud.google.com/pubsub/docs/filtering). If non-empty,
   *   then only `PubsubMessage`s whose `attributes` field matches the filter are
   *   delivered on this subscription. If empty, then no messages are filtered
   *   out.
   * */
  filter?: string;

  /**
   *   If true, messages published with the same `ordering_key` in `PubsubMessage`
   *   will be delivered to the subscribers in the order in which they
   *   are received by the Pub/Sub system. Otherwise, they may be delivered in
   *   any order.
   */
  enableMessageOrdering?: boolean;
}
```
