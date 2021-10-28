---
id: options
title: Other Options
sidebar_position: 6
---

## Enabling gRPC C++ bindings

:::caution
 **NOTE: DEPRECATED**
:::

The native [grpc](https://npmjs.com/grpc) module has been deprecated and we would be removing this option in the future.

For some workflows and environments it might make sense to use the C++ gRPC implementation, instead of the default one. To configure the module to use an alternative grpc transport use the following environment variable:

```shell
PUBSUB_USE_GRPC=true
```
