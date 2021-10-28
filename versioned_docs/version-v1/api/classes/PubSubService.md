---
id: "PubSubService"
title: "Class: PubSubService"
sidebar_label: "PubSubService"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• `Private` **new PubSubService**()

#### Defined in

[src/service/pubsub.ts:18](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L18)

## Properties

### server

• `Private` `Optional` **server**: `Server`

#### Defined in

[src/service/pubsub.ts:16](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L16)

___

### client

▪ `Static` `Protected` **client**: `PubSubClientV2`

#### Defined in

[src/service/pubsub.ts:12](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L12)

___

### driver

▪ `Static` `Protected` **driver**: ``"synchronous"`` \| ``"google"``

#### Defined in

[src/service/pubsub.ts:14](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L14)

___

### instance

▪ `Static` `Protected` **instance**: [`PubSubService`](PubSubService)

#### Defined in

[src/service/pubsub.ts:13](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L13)

___

### status

▪ `Static` `Private` **status**: ``"ready"`` \| ``"pending"`` \| ``"closed"`` = `'pending'`

#### Defined in

[src/service/pubsub.ts:15](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L15)

## Methods

### bind

▸ `Private` **bind**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`PubSubService`](PubSubService) |

#### Returns

`void`

#### Defined in

[src/service/pubsub.ts:72](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L72)

___

### closeAll

▸ **closeAll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/pubsub.ts:133](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L133)

___

### getAllSubscriptions

▸ **getAllSubscriptions**(): `Promise`<`AllSubscriptions`[]\>

Retrieves a list of subscribers

#### Returns

`Promise`<`AllSubscriptions`[]\>

#### Defined in

[src/service/pubsub.ts:219](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L219)

___

### getClient

▸ `Private` **getClient**(): `PubSubClientV2`

#### Returns

`PubSubClientV2`

#### Defined in

[src/service/pubsub.ts:125](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L125)

___

### getSubscribers

▸ **getSubscribers**(): `Subscribers`

#### Returns

`Subscribers`

#### Defined in

[src/service/pubsub.ts:129](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L129)

___

### initClient

▸ **initClient**(): `void`

#### Returns

`void`

#### Defined in

[src/service/pubsub.ts:89](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L89)

___

### initDriver

▸ `Private` **initDriver**(): `void`

#### Returns

`void`

#### Defined in

[src/service/pubsub.ts:77](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L77)

___

### publish

▸ **publish**<`T`, `P`\>(`topic`, `message`, `options`): `Promise`<`string`\>

Publishes new orders to PubSub.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Topic`](Topic)<`T`\> |
| `P` | extends [`Payload`](../interfaces/Payload) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `T` |
| `message` | `P` |
| `options` | [`PublishOptions`](../interfaces/Interfaces.PublishOptions) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/service/pubsub.ts:107](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L107)

___

### shouldStartSynchronousSubscriptions

▸ `Private` **shouldStartSynchronousSubscriptions**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/service/pubsub.ts:119](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L119)

___

### startServer

▸ `Private` **startServer**(): `void`

#### Returns

`void`

#### Defined in

[src/service/pubsub.ts:25](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L25)

___

### startSubscriptions

▸ **startSubscriptions**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/pubsub.ts:152](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L152)

___

### subscribe

▸ **subscribe**(`subscription`): `Promise`<`void`\>

Subscribes to any given topic

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | `SubscriberTuple` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/pubsub.ts:212](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L212)

___

### syncDriverIsEnabled

▸ `Private` **syncDriverIsEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/service/pubsub.ts:85](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L85)

___

### validate

▸ `Protected` **validate**<`T`, `P`\>(`topic`, `message`): `void`

Validates Topic and Message according to validation rules set in Topic class

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Topic`](Topic)<`T`\> |
| `P` | extends [`Payload`](../interfaces/Payload) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `T` | Topic |
| `message` | `P` | Message |

#### Returns

`void`

#### Defined in

[src/service/pubsub.ts:201](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L201)

___

### getInstance

▸ `Static` **getInstance**(): [`PubSubService`](PubSubService)

#### Returns

[`PubSubService`](PubSubService)

#### Defined in

[src/service/pubsub.ts:97](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L97)

___

### isHealthy

▸ `Static` **isHealthy**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/service/pubsub.ts:48](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/pubsub.ts#L48)
