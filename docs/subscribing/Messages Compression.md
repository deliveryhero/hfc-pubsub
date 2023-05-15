---
id: Messages_compression
title: Messages compression
sidebar_position: 1
---

Framework supports gzip compression/decompression for messages.

It uses [zlib port to js](https://github.com/nodeca/pako) for gzip and ungzip messages.

## Compression

[Topic compression option](../publishing/topics#compression)

## Decompression

`message.toJSON()` automatically checks if payload is gzip compressed and decompress it.

Also, framework exports `isGzipCompressed(data: Buffer)` function to check if data payload is compressed.

## Examples

```ts title="/pubsub/subscriptions/compression.topic.example.sub.ts"
import { SubscriberObject, isGzipCompressed } from '@honestfoodcompany/pubsub';

type Payload = any;

const subscriber: SubscriberObject<Payload> = {
  topicName: 'compression.topic',
  subscriptionName: 'compression.topic.console-log.subscription',

  handleMessage: (message) => {
    console.log('is compressed', isGzipCompressed(message.data)); // true if payload is compressed
    console.log(message.toJSON()); // automatically decompress payload if it's compressed
    message.ack();
  },
};

export default subscriber;
```
