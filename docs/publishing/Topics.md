---
id: topics
title: Topics
sidebar_position: 0
---

Create a topic in `PUBSUB_ROOT_DIR/topics` which extends `Topic` and a payload which extends `Payload` from package.

```ts title="/pubsub/topics/simple.topic.name.ts"
import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

export interface Payload extends BasePayload {
  id: number;
  data: string;
}

export default class SimpleTopic extends Topic<Payload> {
  static readonly topicName = 'simple.topic.name';
}
```

:::tip
As a convention, the name of the topic file should match the name of the topic name so the file directory becomes self-documenting.
:::

### Publishing a message

If a topic does not exist, it will be created before a message is published.

#### Example

```ts title="client.example.ts"
import SimpleTopic from 'PUBSUB_ROOT_DIR/topics/simple.topic.name';

new SimpleTopic().publish({ id: 1, data: 'My first message' });
```

### Compression

Framework supports gzip compression on publish. It can be enabled in Topic options.

With option enabled, message data will compressed before publish to PubSub.

See [Compression Topic example](https://github.com/deliveryhero/hfc-pubsub/tree/main/examples/typescript/topics/compression.topic.ts), [Messages decompression](../subscribing/Messages_compression#decompression).
