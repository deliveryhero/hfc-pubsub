---
id: introduction
title: Introduction
sidebar_position: 0
slug: /
---

## @honestfoodcompany/pubsub

PubSub is a lightweight framework and subscription server for [Google Pub/Sub](https://cloud.google.com/pubsub). It was created to speed up development time ⚡️ and it provides a common foundation for building event driven applications. It lets developers define topics and subscriptions simply and declaratively, while additionally offering a simple subscription server to run all of a project's subscription handlers.

![demo of subscription service starting through cli](/img/demo.gif)

## Features

PubSub Framework is built with the developer experience in mind.

- Built with 💚 and Typescript
  - In built types
  - Run with `ts-node` in dev
- Easy to setup
  - Define pub/sub subscriptions and topics in a declarative way
  - Define your subscription handlers with a simple object
  - Define a topic and publish messages with a few lines of code
- ✂️ Developer experience
  - Start receiving messages in minutes
  - Add configuration defaults for all your subscriptions in one place
  - DLQs and IAM automatically handled for you
  - Auto load code from folder
