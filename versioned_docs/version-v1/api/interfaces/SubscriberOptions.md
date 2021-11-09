---
id: "SubscriberOptions"
title: "Interface: SubscriberOptions"
sidebar_label: "SubscriberOptions"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `GoogleCloudSubscriberOptions`

  ↳ **`SubscriberOptions`**

## Properties

### ackDeadline

• `Optional` **ackDeadline**: `number`

#### Inherited from

GoogleCloudSubscriberOptions.ackDeadline

#### Defined in

node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:105

___

### ackDeadlineSeconds

• `Optional` **ackDeadlineSeconds**: `number`

#### Defined in

[src/subscriber/subscriberV2.ts:182](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriberV2.ts#L182)

___

### batching

• `Optional` **batching**: `BatchOptions`

#### Inherited from

GoogleCloudSubscriberOptions.batching

#### Defined in

node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:106

___

### deadLetterPolicy

• `Optional` **deadLetterPolicy**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createDefaultSubscription?` | `boolean` |
| `deadLetterTopic` | `string` |
| `maxDeliveryAttempts` | `number` |

#### Defined in

[src/subscriber/subscriberV2.ts:184](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriberV2.ts#L184)

___

### enableMessageOrdering

• `Optional` **enableMessageOrdering**: `boolean`

  If true, messages published with the same `ordering_key` in `PubsubMessage`
  will be delivered to the subscribers in the order in which they
  are received by the Pub/Sub system. Otherwise, they may be delivered in
  any order.

#### Defined in

[src/subscriber/subscriberV2.ts:215](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriberV2.ts#L215)

___

### enableOpenTelemetryTracing

• `Optional` **enableOpenTelemetryTracing**: `boolean`

#### Inherited from

GoogleCloudSubscriberOptions.enableOpenTelemetryTracing

#### Defined in

node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:110

___

### filter

• `Optional` **filter**: `string`

  An expression written in the Pub/Sub [filter
  language](https://cloud.google.com/pubsub/docs/filtering). If non-empty,
  then only `PubsubMessage`s whose `attributes` field matches the filter are
  delivered on this subscription. If empty, then no messages are filtered
  out.

#### Defined in

[src/subscriber/subscriberV2.ts:207](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriberV2.ts#L207)

___

### flowControl

• `Optional` **flowControl**: `FlowControlOptions`

#### Inherited from

GoogleCloudSubscriberOptions.flowControl

#### Defined in

node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:107

___

### project

• `Optional` **project**: [`GooglePubSubProject`](Interfaces.GooglePubSubProject)

#### Defined in

[src/subscriber/subscriberV2.ts:183](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriberV2.ts#L183)

___

### retryPolicy

• `Optional` **retryPolicy**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maximumBackoff` | `Object` |
| `maximumBackoff.nanos?` | `number` |
| `maximumBackoff.seconds` | `number` |
| `minimumBackoff` | `Object` |
| `minimumBackoff.nanos?` | `number` |
| `minimumBackoff.seconds` | `number` |

#### Defined in

[src/subscriber/subscriberV2.ts:189](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/subscriber/subscriberV2.ts#L189)

___

### streamingOptions

• `Optional` **streamingOptions**: `MessageStreamOptions`

#### Inherited from

GoogleCloudSubscriberOptions.streamingOptions

#### Defined in

node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:109

___

### useLegacyFlowControl

• `Optional` **useLegacyFlowControl**: `boolean`

#### Inherited from

GoogleCloudSubscriberOptions.useLegacyFlowControl

#### Defined in

node_modules/@google-cloud/pubsub/build/src/subscriber.d.ts:108
