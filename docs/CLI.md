---
id: cli
title: CLI
sidebar_position: 1
---

## CLI commands - starting and listing subscriptions

Prerequisites: Install npx if you don't have it installed yet: `npm i -g npx`

| Command                   | Description                  |
| ------------------------- | ---------------------------- |
| `npx subscriptions start` | starts project subscriptions |
| `npx subscriptions list`  | lists project subscriptions  |

> Alternatively the CLI can be found at `./node_modules/.bin/subscriptions`

### Usage with Typescript

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
