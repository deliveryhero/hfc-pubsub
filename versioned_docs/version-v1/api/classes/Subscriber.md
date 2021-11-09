---
id: "Subscriber"
title: "Class: Subscriber"
sidebar_label: "Subscriber"
sidebar_position: 0
custom_edit_url: null
---

**`deprecated`**

## Constructors

### constructor

• **new Subscriber**()

**`deprecated`**

#### Defined in

[src/subscriber/subscriber.ts:38](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L38)

## Properties

### ackDeadlineSeconds

▪ `Static` **ackDeadlineSeconds**: `number` = `10`

Acknowledge deadline in seconds. If left
unset the initial value will be 10 seconds, but it will evolve into the
99th percentile time it takes to acknowledge a message

**`deprecated`** in favor of SubscriberV2.metadata.options.ackDeadline

#### Defined in

[src/subscriber/subscriber.ts:33](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L33)

___

### description

▪ `Static` **description**: `string`

**`deprecated`** in favor of SubscriberV2.metadata.description

#### Defined in

[src/subscriber/subscriber.ts:20](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L20)

___

### maxMessages

▪ `Static` **maxMessages**: `number` = `1`

**`deprecated`** in favor of SubscriberV2.metadata.options.flowControl.maxMessages

#### Defined in

[src/subscriber/subscriber.ts:25](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L25)

___

### subscriptionName

▪ `Static` **subscriptionName**: `string`

**`deprecated`** in favor of SubscriberV2.metadata.subscriptionName

#### Defined in

[src/subscriber/subscriber.ts:15](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L15)

___

### topicName

▪ `Static` **topicName**: `string`

**`deprecated`** in favor of SubscriberV2.metadata.topicName

#### Defined in

[src/subscriber/subscriber.ts:10](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L10)

## Methods

### handleMessage

▸ **handleMessage**(`_message`): `Promise`<`void`\>

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `_message` | [`Message`](Message) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/subscriber/subscriber.ts:53](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L53)

___

### init

▸ **init**(): `Promise`<`void`\>

**`deprecated`**

#### Returns

`Promise`<`void`\>

#### Defined in

[src/subscriber/subscriber.ts:46](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriber.ts#L46)
