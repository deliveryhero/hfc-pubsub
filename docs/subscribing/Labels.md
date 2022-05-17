---
id: labels
title: Adding Labels
sidebar_label: Labels
sidebar_position: 2
---

## Global Labels

Subscription Service can have global labels in `defaultSubscriberOptions`, these will be merged with local subscriber level `labels`.

### Env Var

We also support `PUBSUB_LABELS` env var which can be a stringified JSON. These work as the default labels added to each subscription.

## Subscriber Specific Labels

Each subscriber can also add it's own labels, these overwrite the above mentioned Global Labels.

```ts
const TestSubscription: SubscriberObject<Payload> = {
  topicName: 'test-topic',
  subscriptionName: 'test-topic.example.subscription',
  description: 'Just a test subscription',

  options: {
    labels: {
      tribe: 'GFS',
      service: 'pubsub',
    },
  },

  async handleMessage(message): Promise<void> {
    const payload = message.toJSON();
    console.log(payload);
    message.ack();
  },
};
```
