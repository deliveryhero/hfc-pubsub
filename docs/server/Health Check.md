---
id: health-check
title: Health Checks
sidebar_position: 4
---

For health checks and readiness probes you can enable the inbuilt health check http server by setting the following environment variables (or corresponding [CLI option](../guides/CLI.md)) :

```sh
PUBSUB_HEALTH_SERVER=true
PUBSUB_SERVER_PORT=8080
```

This will expose a very simple http server that checks the static method [`isHealthy`](/api/classes/PubSubService/#ishealthy) and returns status code accordingly.

You can also define your own server in your app and use the public static method directly as part of your custom health check endpoint.
