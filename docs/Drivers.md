---
id: drivers
title: PubSub Drivers
sidebar_position: 4
---

## Google PubSub Driver

This is the default driver. It uses [Google Cloud PubSub](https://cloud.google.com/pubsub) to send messages.

It requires the env vars `GOOGLE_APPLICATION_CREDENTIALS` and `GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` to function correctly.

:::note
 **NOTE:** Make sure the service account is assigned the correct roles
:::

The role assigned to the service account in the credentials should be [`roles/pubsub.admin`](https://cloud.google.com/pubsub/docs/access-control)

This is required because we require the below permissions:

| Permission                            | Reason                                                                                                                      |
|-------------------------------------- |---------------------------------------------------------------------------------------------------------------------------- |
| pubsub.topics.publish                 | Publish to Topic                                                                                                            |
| pubsub.subscriptions.consume          | Consume from Subscription                                                                                                   |
| pubsub.topics.get                     | Get Topic to create subscription for it                                                                                     |
| pubsub.topics.attachSubscription      | Create subscription for a topic                                                                                     |
| pubsub.subscriptions.get              | Get subscription to start consuming it                                                                                     |
| pubsub.topics.create                  | Creating Topics Automatically (for publishing, subscribing and DLQs)                                                        |
| pubsub.subscriptions.create           | Creating Subscriptions (for subscribing and DLQs)                                                                           |
| resourcemanager.projects.get          | Get Project Number from Project to bind DLQ policies                                                                        |
| pubsub.subscriptions.setIamPolicy     | [Assigning Subscriber Role for DLQs](https://cloud.google.com/pubsub/docs/handling-failures#assigning_the_subscriber_role)  |
| pubsub.topics.setIamPolicy            | [Assigning Publisher Role for DLQs](https://cloud.google.com/pubsub/docs/handling-failures#assigning_the_publisher_role)    |

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

### Features not supported in Synchronous Driver

- Filtering using attributes
- Retrying failed messages
