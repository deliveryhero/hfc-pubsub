---
id: drivers
title: PubSub Drivers
sidebar_position: 6
---

## Google PubSub Driver

This is the default driver. It uses [Google Cloud PubSub](https://cloud.google.com/pubsub) to send messages.

It requires the env vars `GOOGLE_APPLICATION_CREDENTIALS` and `GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` to function correctly.

:::note
 **NOTE:** Make sure the service account is assigned the correct roles
:::

The role assigned to the service account in the credentials should be `roles/pubsub.admin`

## Synchronous Driver

If you would like to bypass Google PubSub and run your subscriptions synchronously (for development purposes) set the following environment variable:

```sh
PUBSUB_DRIVER=synchronous
```

This uses an `EventEmitter` based pubsub model, and hence only works inside a single process.

:::caution
 **NOTE:** Not recommended for production use
:::

This is useful for writing unit tests, read more in the [testing guide](./Testing#unit-tests)

### Supported Features in Synchronous Driver
