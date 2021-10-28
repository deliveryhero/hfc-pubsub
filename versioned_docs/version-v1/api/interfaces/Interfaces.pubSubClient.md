---
id: "Interfaces.pubSubClient"
title: "Interface: pubSubClient"
sidebar_label: "pubSubClient"
custom_edit_url: null
---

[Interfaces](../namespaces/Interfaces).pubSubClient

## Methods

### getAllSubscriptions

▸ **getAllSubscriptions**(): `Promise`<`AllSubscriptions`[]\>

#### Returns

`Promise`<`AllSubscriptions`[]\>

#### Defined in

[src/interface/pubSubClient.ts:16](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/pubSubClient.ts#L16)

___

### publish

▸ **publish**<`T`, `P`\>(`topic`, `message`): `Promise`<`string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Topic`](../classes/Topic)<`T`\> |
| `P` | extends [`Payload`](Payload) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `T` |
| `message` | `P` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/interface/pubSubClient.ts:11](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/pubSubClient.ts#L11)

___

### subscribe

▸ **subscribe**(`subscriber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriber` | typeof [`Subscriber`](../classes/Subscriber) |

#### Returns

`void`

#### Defined in

[src/interface/pubSubClient.ts:15](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/pubSubClient.ts#L15)
