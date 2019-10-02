# HFC Google Pub/Sub Module

## Features

1. Framework for publishing and subscribing to messages on Google PubSub
2. CLI client for starting and listing subscriptions
3. Create new topics and publish a message to those topics with 2 lines
4. Automatic timestamping of all messages (ISO8601)

## Requirements

add the following to your `.env`

```ini
GOOGLE_APPLICATION_CREDENTIALS=/path/to/hfc-experiments-83d5537a8388-key.json
GOOGLE_CLOUD_PUB_SUB_PROJECT_ID="hfc-experiments"
```

## Adding a new subscription

1. Add your subscription in `@lib/pubsub/subscriptions/name.of.pubsub.subscription` (Follow the template examples)
2. Add your subscription class to the subscriptions array found in `@lib/pubsub/services/subscriptionService`

As a convention the name of the file should match the name of the subscription so the code and file structure becomes self-documenting.

## Running subscription handlers

1. Run subscriptions `npm run subscriptions-start`
2. List registered subscriptions `npm run subscriptions-list`

Note: If the subscription doesn't exist in google pub/sub it will be created when you run `npm run subscriptions-start`

## Publishing a Message

1. Create a topic in `@lib/pubsub/topics` which extends `Topic` and a payload which extends `BasePayload`

```typescript
// @lib/pubsub/topics/simple.topic.name.ts
import BaseTopic, { BasePayload } from "./base/topic";

export default class SimpleTopic extends BaseTopic {
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
import SimpleTopic, { Payload } from "@lib/pubsub/topics/simple.topic.name";

let topic = new SimpleTopic();
topic.publish<Payload>({ id: 1, data: "My first message" });

// publishing message: on simple.topic.name
// { "id": 1, "data": "My first message", "_timestamp":"2019-09-12T09:19:30.310Z"}
```

If a topic does not exist yet with the name you defined, it will be created before the message is sent.

## Subscribing to a Topic

1. Create a subscription class in `@lib/pubsub/subscriptions`

```typescript
// @lib/pubsub/subscriptions/simple.topic.name.subscription.ts

import Subscription, { Message } from "./base/subscription";
import { Message } from "@google-cloud/pubsub";

export default class SimpleSubscription extends BaseSubscription {
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

2. Register your subscription with the `SubscriptionService`

```typescript
// @lib/pubsub/services/subscriptionService.ts

import BaseSubscriptionService from "./base/baseSubscriptionService";
import SimpleSubscription from "@lib/pubsub/subscriptions/simple.topic.name.subscription";

export default class SubscriptionService extends BaseSubscriptionService {
  /**
   * Add subscriptions to this array to register them
   */
  public static subscriptions = [new SimpleSubscription()];
}
```

3. Start your subscriptions `npm run start-subscriptions`
