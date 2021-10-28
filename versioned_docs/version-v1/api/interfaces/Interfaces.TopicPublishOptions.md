---
id: "Interfaces.TopicPublishOptions"
title: "Interface: TopicPublishOptions"
sidebar_label: "TopicPublishOptions"
custom_edit_url: null
---

[Interfaces](../namespaces/Interfaces).TopicPublishOptions

This is the user facing type where things are optional
and fields are overrides to base config in Topic

## Hierarchy

- [`RecursivePartial`](../namespaces/Interfaces#recursivepartial)<[`RetryConfig`](Interfaces.RetryConfig)\>

  ↳ **`TopicPublishOptions`**

## Properties

### attributes

• `Optional` **attributes**: `Attributes`

#### Defined in

[src/interface/publishOptions.ts:51](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L51)

___

### backoffSettings

• `Optional` **backoffSettings**: [`RecursivePartial`](../namespaces/Interfaces#recursivepartial)<[`BackoffSettings`](Interfaces.BackoffSettings)\>

#### Inherited from

RecursivePartial.backoffSettings

#### Defined in

[src/interface/publishOptions.ts:43](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L43)

___

### retryCodes

• `Optional` **retryCodes**: (`undefined` \| [`RecursivePartial`](../namespaces/Interfaces#recursivepartial)<[`RetryCodesAllowed`](../namespaces/Interfaces#retrycodesallowed)\>)[]

#### Inherited from

RecursivePartial.retryCodes

#### Defined in

[src/interface/publishOptions.ts:42](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L42)
