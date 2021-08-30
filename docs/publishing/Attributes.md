---
id: attributes
title: Publishing with Attributes
sidebar_label: Attributes
sidebar_position: 2
---

See: <https://cloud.google.com/pubsub/docs/publisher#using_attributes>

```ts title="client.example.ts"
import SimpleTopic, { Payload } from 'pubsub/topics/simple.topic.name';

let topic = new SimpleTopic();
topic.publish<Payload>(
  { id: 1, data: 'My first message' },
  {
    attributes: {
      filter: 'a',
      company: 'b',
      status: 'failed',
    },
  },
);
```

These attributes can then be used to filter messages using the `filter` option in Subscription Options.
