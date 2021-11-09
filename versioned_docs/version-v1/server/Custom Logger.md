---
id: custom-logger
title: Passing a Custom Logger
sidebar_label: Custom Logger
sidebar_position: 1
---

In the main SubscriptionService before defining subscription class you can update the logger that is being used by the package for logging. It's an optional definition and by default it uses `console.*` for logging `.info`, `.warn` and `.error` these 3 function keys are a must have for the logger you pass.

```ts title="/pubsub/subscription.service.ts"
import * as PubSub from '@honestfoodcompany/pubsub';

/**
 * This function call is optional, you can pass an instance of Pino, Winston logger
 * By default it uses default console.* for logging
 * The logger you pass must support .error, .info and .warn methods for it to work
 */
PubSub.setLogger(console);
```

You can also call setLogger from some other file like a global file, just make sure it gets imported somehow into the `subscription.service`.

```js
const { setLogger } = require('@honestfoodcompany/pubsub');
setLogger(console);
```