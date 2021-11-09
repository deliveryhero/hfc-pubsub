---
id: "SubscriptionService"
title: "Class: SubscriptionService"
sidebar_label: "SubscriptionService"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new SubscriptionService**()

#### Defined in

[src/service/subscription.ts:26](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L26)

## Properties

### \_subscribers

▪ `Static` `Private` **\_subscribers**: `Subscribers` = `[]`

#### Defined in

[src/service/subscription.ts:20](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L20)

___

### defaultSubscriberOptions

▪ `Static` **defaultSubscriberOptions**: [`SubscriberOptions`](../interfaces/SubscriberOptions)

#### Defined in

[src/service/subscription.ts:22](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L22)

___

### instance

▪ `Static` **instance**: [`SubscriptionService`](SubscriptionService)

#### Defined in

[src/service/subscription.ts:24](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L24)

___

### subscribers

▪ `Static` **subscribers**: (typeof [`Subscriber`](Subscriber) \| typeof `default` \| `SubscriberObject`)[] = `[]`

#### Defined in

[src/service/subscription.ts:15](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L15)

## Methods

### checkExistence

▸ `Protected` **checkExistence**(`object`, `property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `property` | `string` |

#### Returns

`void`

#### Defined in

[src/service/subscription.ts:30](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L30)

___

### closeAll

▸ `Static` **closeAll**(): `Promise`<`void`\>

Call this function from a process exit handler to close all current subscriptions

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/subscription.ts:59](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L59)

___

### getSubscribers

▸ `Static` **getSubscribers**(): `Subscribers`

#### Returns

`Subscribers`

#### Defined in

[src/service/subscription.ts:63](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L63)

___

### handleError

▸ `Static` **handleError**(`error`): `void`

If passed, it would serve as the default error handler at SubscriptionService level
Applications should override this with custom error handling

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[src/service/subscription.ts:49](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L49)

___

### init

▸ `Static` **init**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/service/subscription.ts:41](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L41)

___

### loadSubscribers

▸ `Static` `Private` **loadSubscribers**(): `Subscribers`

#### Returns

`Subscribers`

#### Defined in

[src/service/subscription.ts:72](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L72)

___

### loadSubscriptionService

▸ `Static` **loadSubscriptionService**(): typeof [`SubscriptionService`](SubscriptionService)

#### Returns

typeof [`SubscriptionService`](SubscriptionService)

#### Defined in

[src/service/subscription.ts:112](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L112)

___

### mergeSubscribers

▸ `Static` `Private` **mergeSubscribers**(`subscribersFromService`, `subscribersFromDirectory`): `Subscribers`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscribersFromService` | `Subscribers` |
| `subscribersFromDirectory` | `Subscribers` |

#### Returns

`Subscribers`

#### Defined in

[src/service/subscription.ts:95](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/service/subscription.ts#L95)
