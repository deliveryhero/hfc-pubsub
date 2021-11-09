---
id: "Payload"
title: "Interface: Payload"
sidebar_label: "Payload"
sidebar_position: 0
custom_edit_url: null
---

extend this interface to define your own payload
e.g.
```typescript
    interface YourTopicPayload extends Payload {
       id: number;
       action: string;
    }
```

## Properties

### \_timestamp

• `Optional` **\_timestamp**: `string`

#### Defined in

[src/topic/index.ts:21](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L21)
