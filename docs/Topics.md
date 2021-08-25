# Topics

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
import SimpleTopic, { Payload } from 'PUBSUB_ROOT_DIR/topics/simple.topic.name';

new SimpleTopic().publish<Payload>({ id: 1, data: 'My first message' });
```

#### Javascript example

```typescript
// client.example.ts
import SimpleTopic from 'PUBSUB_ROOT_DIR/topics/simple.topic.name';

new SimpleTopic().publish({ id: 1, data: 'My first message' });
```

### Publishing a message with retry settings

> NOTE: This may not work right now

see [Sample Topic with Retry Settings](https://github.com/honest-food-company/pubsub/tree/master/examples/typescript/test.topic.withRetrySettings.ts) for defining a default retry policy

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

### Publishing on a different GCP project

see [Sample Topic using its own GCP Project](https://github.com/honest-food-company/pubsub/tree/master/__tests__/pubsub/topics/example.topic_withProjectCredentials.ts)

### Publishing with Attributes

See: <https://cloud.google.com/pubsub/docs/publisher#using_attributes>

```typescript
// client.example.ts
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
