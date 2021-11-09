---
id: "Topic"
title: "Class: Topic"
sidebar_label: "Topic"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- `NamedTopic`
- `TopicWithCustomProject`

## Constructors

### constructor

• **new Topic**()

#### Defined in

[src/topic/index.ts:50](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L50)

## Properties

### mq

• `Protected` **mq**: [`PubSubService`](PubSubService)

#### Defined in

[src/topic/index.ts:48](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L48)

___

### name

• `Readonly` **name**: `string` = `''`

#### Implementation of

NamedTopic.name

#### Defined in

[src/topic/index.ts:33](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L33)

___

### project

• `Optional` **project**: [`GooglePubSubProject`](../interfaces/Interfaces.GooglePubSubProject)

#### Implementation of

TopicWithCustomProject.project

#### Defined in

[src/topic/index.ts:34](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L34)

___

### retryConfig

• **retryConfig**: [`RetryConfig`](../interfaces/Interfaces.RetryConfig)

#### Defined in

[src/topic/index.ts:36](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L36)

## Methods

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[src/topic/index.ts:86](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L86)

___

### publish

▸ **publish**<`T`\>(`message`, `options?`): `Promise`<`string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Payload`](../interfaces/Payload) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `T` |
| `options?` | [`TopicPublishOptions`](../interfaces/Interfaces.TopicPublishOptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/topic/index.ts:61](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L61)

___

### validateMessage

▸ **validateMessage**(`message`): `void`

**`todo`** implement message validation logic. tried to link Topic and Message using static name methods, but hit a wall with subclass static inheritance typescript issues

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`Payload`](../interfaces/Payload) | Message |

#### Returns

`void`

#### Defined in

[src/topic/index.ts:57](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L57)

___

### validateTopic

▸ **validateTopic**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/topic/index.ts:90](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/topic/index.ts#L90)
