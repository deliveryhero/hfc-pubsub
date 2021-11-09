---
id: "Interfaces"
title: "Namespace: Interfaces"
sidebar_label: "Interfaces"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [BackoffSettings](../interfaces/Interfaces.BackoffSettings)
- [GooglePubSubProject](../interfaces/Interfaces.GooglePubSubProject)
- [PublishOptions](../interfaces/Interfaces.PublishOptions)
- [RetryConfig](../interfaces/Interfaces.RetryConfig)
- [TopicPublishOptions](../interfaces/Interfaces.TopicPublishOptions)
- [pubSubClient](../interfaces/Interfaces.pubSubClient)

## Type aliases

### RecursivePartial

Ƭ **RecursivePartial**<`T`\>: { [P in keyof T]?: RecursivePartial<T[P]\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/interface/publishOptions.ts:2](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L2)

___

### RetryCodesAllowed

Ƭ **RetryCodesAllowed**: ``10`` \| ``1`` \| ``4`` \| ``13`` \| ``8`` \| ``14`` \| ``2``

#### Defined in

[src/interface/publishOptions.ts:6](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L6)
