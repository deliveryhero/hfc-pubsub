---
id: "Message"
title: "Class: Message"
sidebar_label: "Message"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Message**()

## Properties

### data

• **data**: `Buffer`

#### Defined in

[src/message/index.ts:4](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L4)

___

### gCloudMessage

• `Optional` **gCloudMessage**: `Message`

#### Defined in

[src/message/index.ts:5](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L5)

## Methods

### ack

▸ **ack**(): `void`

#### Returns

`void`

#### Defined in

[src/message/index.ts:29](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L29)

___

### modAck

▸ **modAck**(`deadline`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deadline` | `number` |

#### Returns

`void`

#### Defined in

[src/message/index.ts:35](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L35)

___

### nack

▸ **nack**(): `void`

#### Returns

`void`

#### Defined in

[src/message/index.ts:41](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L41)

___

### from

▸ `Static` **from**(`message`): [`Message`](Message)

Builds a new message object in the synchronous driver.
Used by the eventBus.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `any` | any message that can be buffered |

#### Returns

[`Message`](Message)

#### Defined in

[src/message/index.ts:12](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L12)

___

### fromGCloud

▸ `Static` **fromGCloud**(`message`): [`Message`](Message)

Builds a message for Google Cloud Driver

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Message` | A valid Google Cloud message |

#### Returns

[`Message`](Message)

#### Defined in

[src/message/index.ts:22](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/message/index.ts#L22)
