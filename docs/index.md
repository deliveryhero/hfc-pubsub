---
id: index
title: PubSub Framework
sidebar_position: 0
slug: /
---

## @honestfoodcompany/pubsub

[![npm](https://img.shields.io/npm/v/@honestfoodcompany/pubsub)](https://www.npmjs.com/package/@honestfoodcompany/pubsub)
[![Node.js CI](https://github.com/deliveryhero/hfc-pubsub/actions/workflows/build.yml/badge.svg)](https://github.com/deliveryhero/hfc-pubsub/actions/workflows/build.yml)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/70fe253d1da34e8aa16bf37ae613d2fe)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=deliveryhero/hfc-pubsub&utm_campaign=Badge_Grade)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/70fe253d1da34e8aa16bf37ae613d2fe)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=deliveryhero/hfc-pubsub&utm_campaign=Badge_Coverage)
[![dependencies Status](https://status.david-dm.org/gh/deliveryhero/hfc-pubsub.svg)](https://david-dm.org/deliveryhero/hfc-pubsub)
[![Known Vulnerabilities](https://snyk.io/test/github/deliveryhero/hfc-pubsub/badge.svg)](https://snyk.io/test/github/deliveryhero/hfc-pubsub/)

This package contains a lightweight framework and subscription server for [Google Pub/Sub](https://cloud.google.com/pubsub). It was created to speed up development time and it provides a common foundation for building event driven applications. It lets developers define topics and subscriptions simply and declaratively, while additionally offering a simple subscription server to run all of a project's subscription handlers.

![demo of subscription service starting through cli](/img/demo.gif)

## Features

1. Run all of your subscriptions at once with a subscription server
2. Define pub/sub subscriptions and topics in a declarative way
3. Define your subscription handlers with a simple object
4. Get started quickly: define a topic and publish messages with a few lines of code

## Getting started

The framework expects that you've created a pubsub directory in your project with the following structure:

```
├── .env                <-- this should be in your project root directory
├── pubsub/             <-- this can be anywhere (defined in .env as PUBSUB_ROOT_DIR)
│   ├── subscriptions/
│   ├── topics/
│   └── subscription.service.js <-- this is the entrypoint for the service
└── package.json
```

1. Once the directory structure has been defined, [environment variables should be set](#required-environment-variables).
2. Then you can create [subscriptions](./Subscriptions) and [topics](./Topics)
3. After a subscription has been created, use the [CLI](./CLI) to start the subscriptions server.
4. Initialize your database connection, define project-level subscription defaults, and register subscriptions in the [Subscription Service](./service).

## Required Environment Variables

The framework expects the following environment variables. They can be added the `.env` file.

```ini title=".env"
GOOGLE_APPLICATION_CREDENTIALS=/path/to/gcp-project-83d5537a8388-key.json
GOOGLE_CLOUD_PUB_SUB_PROJECT_ID=gcp-project-id
PUBSUB_ROOT_DIR=/path/to/your/pubsub/directory # this can be a relative path
```

| Variable                          | Description                                                                                                                                                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUBSUB_ROOT_DIR`                 | must be the path to your project's pubsub directory. This module only works with .js files, so if you are writing your code in typescript, you must set this variable to the pubsub directory in your project's build directory. |
| `GOOGLE_APPLICATION_CREDENTIALS`  | see <https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account> to generate this                                                                                                                   |
| `GOOGLE_CLOUD_PUB_SUB_PROJECT_ID` | name of the project in Google Cloud Platform                                                                                                                                                                                     |
| `PROJECT_NUMBER` (Optional)       | Project for binding DLQ roles. Check [Binding Subscriber and Publisher role](#binding-subscriber-and-publisher-role) for more details. If Not provided GOOGLE_CLOUD_PUB_SUB_PROJECT_ID is used to fetch the PROJECT_NUMBER       |
