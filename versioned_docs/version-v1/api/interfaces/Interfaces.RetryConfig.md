---
id: "Interfaces.RetryConfig"
title: "Interface: RetryConfig"
sidebar_label: "RetryConfig"
custom_edit_url: null
---

[Interfaces](../namespaces/Interfaces).RetryConfig

 https://github.com/googleapis/nodejs-pubsub/blob/master/samples/publishWithRetrySettings.js

// Retry settings control how the publisher handles retryable failures
// Default values are shown
const retrySettings = {
retryCodes: [
10, // 'ABORTED'
1, // 'CANCELLED',
4, // 'DEADLINE_EXCEEDED'
13, // 'INTERNAL'
8, // 'RESOURCE_EXHAUSTED'
14, // 'UNAVAILABLE'
2, // 'UNKNOWN'
],
backoffSettings: {
initialRetryDelayMillis: 100,
retryDelayMultiplier: 1.3,
maxRetryDelayMillis: 60000,
initialRpcTimeoutMillis: 5000,
rpcTimeoutMultiplier: 1.0,
maxRpcTimeoutMillis: 600000,
totalTimeoutMillis: 600000,
},
};

## Hierarchy

- **`RetryConfig`**

  ↳ [`PublishOptions`](Interfaces.PublishOptions)

## Properties

### backoffSettings

• **backoffSettings**: [`BackoffSettings`](Interfaces.BackoffSettings)

#### Defined in

[src/interface/publishOptions.ts:43](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L43)

___

### retryCodes

• **retryCodes**: [`RetryCodesAllowed`](../namespaces/Interfaces#retrycodesallowed)[]

#### Defined in

[src/interface/publishOptions.ts:42](https://github.com/deliveryhero/hfc-pubsub/blob/385de46/src/interface/publishOptions.ts#L42)
