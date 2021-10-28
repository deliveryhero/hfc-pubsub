---
id: "Interfaces.PublishOptions"
title: "Interface: PublishOptions"
sidebar_label: "PublishOptions"
custom_edit_url: null
---

[Interfaces](../namespaces/Interfaces).PublishOptions

This is the the actual type for use in the driver

## Hierarchy

- [`RetryConfig`](Interfaces.RetryConfig)

  ↳ **`PublishOptions`**

## Properties

### attributes

• `Optional` **attributes**: `Attributes`

#### Defined in

[src/interface/publishOptions.ts:58](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L58)

___

### backoffSettings

• **backoffSettings**: [`BackoffSettings`](Interfaces.BackoffSettings)

#### Inherited from

[RetryConfig](Interfaces.RetryConfig).[backoffSettings](Interfaces.RetryConfig#backoffsettings)

#### Defined in

[src/interface/publishOptions.ts:43](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L43)

___

### retryCodes

• **retryCodes**: [`RetryCodesAllowed`](../namespaces/Interfaces#retrycodesallowed)[]

#### Inherited from

[RetryConfig](Interfaces.RetryConfig).[retryCodes](Interfaces.RetryConfig#retrycodes)

#### Defined in

[src/interface/publishOptions.ts:42](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L42)
