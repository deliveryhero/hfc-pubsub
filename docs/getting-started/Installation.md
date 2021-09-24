---
id: installation
title: Installation
slug: /getting-started/installation
sidebar_position: 1
---

## Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 12.13.0 or above (which can be checked by running node -v). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed

## Install

### From NPM

[![npm](https://img.shields.io/npm/v/@honestfoodcompany/pubsub)](https://www.npmjs.com/package/@honestfoodcompany/pubsub)

```sh
npm i --save @honestfoodcompany/pubsub
```

### From Github Package Repository

We also publish to Github Package Repository as `@deliveryhero/pubsub`. To install from there, first add this to your `.npmrc`:

```
@deliveryhero:registry="https://npm.pkg.github.com/"
```

And then install the package.

```sh
npm i --save @deliveryhero/pubsub
```

## Project structure

The framework expects that you've created a pubsub directory in your project with the following structure:

```
├── .env                <-- this should be in your project root directory and will be autoloaded
├── pubsub/             <-- this can be anywhere and named enything (defined in .env as PUBSUB_ROOT_DIR)
│   ├── subscriptions/  <-- any files ending with a `.sub.js` ext will be autoloaded from here
│   ├── topics/
│   └── subscription.service.js <-- this is the entrypoint for the service
└── package.json
```

## Required Environment Variables

The framework expects the following environment variables. They can be added to the `.env` file or passed through CLI args.

```ini title=".env"
PUBSUB_ROOT_DIR=/path/to/your/pubsub/directory # this can be a relative path to process cwd
GOOGLE_APPLICATION_CREDENTIALS=/path/to/gcp-project-83d5537a8388-key.json
GOOGLE_CLOUD_PUB_SUB_PROJECT_ID=gcp-project-id
```

| CLI Argument                     | Env Variable                      | Description                                                                                                                                                                                                                      |
| -------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `root-dir`                       | `PUBSUB_ROOT_DIR`                 | must be the path to your project's pubsub directory. This module only works with .js files, so if you are writing your code in typescript, you must set this variable to the pubsub directory in your project's build directory. |
| `google-application-credentials` | `GOOGLE_APPLICATION_CREDENTIALS`  | see <https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account> to generate this                                                                                                                   |
| `project-id`                     | `GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` | name of the project in Google Cloud Platform                                                                                                                                                                                     |
| `server-port`                    | `SERVER_PORT`                     | PORT at which the pubsub should run the server at                                                                                                                                                                                |
| `health-server`                  | `PUBSUB_HEALTH_SERVER`            | If value assigned is true this would run a server showing health state and return 500 if not healthy                                                                                                                             |

|

## What next?

1. Once the directory structure has been defined and environment variables set
2. Then you can create [subscriptions](../subscribing/Subscriptions.md) and [topics](../publishing/Topics.md)
3. Initialize your database connection, define project-level subscription defaults, and register subscriptions in the [Subscription Service](../server/Service.md).
4. After a service has been created, use the [CLI](./CLI.md) to start the subscriptions server.
