---
id: topics
title: Topics
sidebar_position: 0
---

Create a topic in `PUBSUB_ROOT_DIR/topics` which extends `Topic` and a payload which extends `Payload` from package.

```ts title="/pubsub/topics/simple.topic.name.ts"
import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

export default class SimpleTopic extends Topic {
  readonly name = 'simple.topic.name';
}

export interface Payload extends BasePayload {
  id: number;
  data: string;
}
```

:::tip
As a convention, the name of the topic file should match the name of the topic name so the file directory becomes self-documenting.
:::

### Publishing a message

If a topic does not exist, it will be created before a message is published.

#### Typescript example

```ts title="client.example.ts"
import SimpleTopic, { Payload } from 'PUBSUB_ROOT_DIR/topics/simple.topic.name';

new SimpleTopic().publish<Payload>({ id: 1, data: 'My first message' });
```

#### Javascript example

```ts title="client.example.js"
const SimpleTopic = require('PUBSUB_ROOT_DIR/topics/simple.topic.name');

new SimpleTopic().publish({ id: 1, data: 'My first message' });
```
