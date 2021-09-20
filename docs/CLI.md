---
id: cli
title: CLI
sidebar_position: 5
---

:::note
  Prerequisites: Install npx if you don't have it installed yet: `npm i -g npx`
:::

| Command                   | Description                  |
| ------------------------- | ---------------------------- |
| `npx subscriptions list`  | lists project subscriptions  |
| `npx subscriptions start` | starts project subscriptions |

:::tip
  Alternatively the CLI can be found at `./node_modules/.bin/subscriptions`
:::

## CLI Options

```sh
Options:
  --help                            Show help                                     [boolean]
  --version                         Show version number                           [boolean]
  --project-id                      Google project id                             [string]
  --root-dir                        Path where pubsub folder resides              [string]
  --project-number                  (Optional) project number for the project     [string]
  --driver                          Use value synchronous or leave it to default  [string]
  --google-application-credentials  Path to exported credentials file             [string]
```

### Subscriptions List

This will output a table of all subscriptions and their descriptions. Example output:

```sh
$ npx subscriptions list

 Google Pub/Sub Subscriptions
Topic name   Subscription name                                Description
simple.topic simple.topic.console-log.subscriptionWithOptions Will console log messages published on test.topic
test.topic   test.topic.console-log                           Will console log messages published on test.topic
test.topic   test.topic.console-log.v2                        Will console log messages published on test.topic
```

### Subscriptions Start

This will start a subscription service using the `subscription.service.{js/ts}` file in your `PUBSUB_ROOT_DIR`. It will first call the `init` method of the Service class and then start the subscriptions, allowing you to do any startup tasks. Read more about [service here](./server/Service.md)

```sh
$ npx subscriptions start

Starting Google Pub/Sub Subscriptions Server
[2021-08-27 10:16:26.824 +0530] INFO: ***** INIT CALLED *****
[2021-08-27 10:16:26.824 +0530] INFO: Connecting to DB
[2021-08-27 10:16:27.829 +0530] INFO: Connected to DB
[2021-08-27 10:16:27.830 +0530] INFO: ***** INIT CALLED *****
[2021-08-27 10:16:29.515 +0530] INFO:    ✔️      simple.topic.console-log.subscriptionWithOptions already exists.
[2021-08-27 10:16:43.766 +0530] INFO:    📭     simple.topic.console-log.subscriptionWithOptions is ready to receive messages at a controlled volume of 100 messages.
[2021-08-27 10:16:44.887 +0530] INFO:    ✔️      test.topic.console-log already exists.
[2021-08-27 10:16:49.395 +0530] INFO:    📭     test.topic.console-log is ready to receive messages at a controlled volume of 5 messages.
[2021-08-27 10:16:51.349 +0530] INFO:    ✔️      test.topic.console-log.v2 already exists.
[2021-08-27 10:17:03.902 +0530] INFO:    📭     test.topic.console-log.v2 is ready to receive messages at a controlled volume of 5 messages.
[2021-08-27 10:17:03.902 +0530] INFO:    ✅      All subscriptions started successfully.

```

### Development Environment

For local use you may want to call the CLI with ts-node instead of directly if you are using typescript.

#### Usage with Typescript

For use with Typescript, update your local `PUBSUB_ROOT_DIR` env var to the src directory of the project with the typescript files.

And instead of using `npx subscriptions start` you can invoke the bin script with [ts-node](https://github.com/TypeStrong/ts-node/):

```sh
npx ts-node ./node_modules/.bin/subscriptions start
```

If you have a separate `tsconfig` for your server code then you should pass it to `ts-node`:

```sh
npx ts-node --project tsconfig.server.json ./node_modules/.bin/subscriptions start
```

To make this easier you can add a script in your `package.json`:

```json
{
  "scripts": {
    "pubsub": "ts-node ./node_modules/.bin/subscriptions start"
  }
}
```

#### Use Debugger with Typescript

`ts-node` doesn't have an `--inspect` option unlike the `node` cli. But we can still pass it to the node process by way of the `NODE_OPTIONS` env var.

```sh
NODE_OPTIONS='--inspect' ts-node --project tsconfig.server.json  ./node_modules/.bin/subscriptions start
```

#### Watch Mode with Typescript

You can use `nodemon` in combination with `ts-node` to develop in watch mode:

```json
{
  "scripts": {
    "pubsub": "nodemon --exec \"NODE_OPTIONS='--inspect' ts-node --project tsconfig.server.json ./node_modules/.bin/subscriptions start\""
  }
}
```
