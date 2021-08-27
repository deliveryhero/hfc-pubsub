---
id: retry-settings
title: Publishing a message with retry settings
sidebar_label: Retry Settings
sidebar_position: 1
---

:::caution
  NOTE: This may not work right now, it is a known bug.
:::

See [Sample Topic with Retry Settings](https://github.com/deliveryhero/hfc-pubsub/tree/main/examples/typescript/test.topic.withRetrySettings.ts) for defining a default retry policy

```ts title="client.example.ts"
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
