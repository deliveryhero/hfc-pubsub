# Changelog

## 2.1.3

### Patch Changes

- [PUB-85](https://honesttech.atlassian.net/browse/PUB-85) - Load subscriptions in parallel ([#105](https://github.com/deliveryhero/hfc-pubsub/pull/105) by [@rndD](https://github.com/rndD))

## 2.1.2

### Patch Changes

- [PUB-88](https://honesttech.atlassian.net/browse/PUB-88) - Pin dependencies to specific versions ([#92](https://github.com/deliveryhero/hfc-pubsub/pull/92) by [@rohit-gohri](https://github.com/rohit-gohri))

## 2.1.1

### Patch Changes

- Prefer GOOGLE_CLOUD_LABELS over PUBSUB_LABELS env var ([#90](https://github.com/deliveryhero/hfc-pubsub/pull/90) by [@rohit-gohri](https://github.com/rohit-gohri))

## 2.1.0

### Minor Changes

- [PUB-84](https://honesttech.atlassian.net/browse/PUB-84) - Add support for labels to subscirptions ([#88](https://github.com/deliveryhero/hfc-pubsub/pull/88) by [@rohit-gohri](https://github.com/rohit-gohri))

## 2.0.1

### Patch Changes

- [PUB-72](https://honesttech.atlassian.net/browse/PUB-72) - Divide subscriptions among multiple clients ([#86](https://github.com/deliveryhero/hfc-pubsub/pull/86) by [@rohit-gohri](https://github.com/rohit-gohri))

## 2.0.0

[Migration Guide](https://deliveryhero.github.io/hfc-pubsub/guides/migrating-to-v2)

### ⚠️ Major Changes ⚠️

- [PUB-68](https://honesttech.atlassian.net/browse/PUB-68) - Set min supported node version as 12.22 ([#72](https://github.com/deliveryhero/hfc-pubsub/pull/72) by [@rohit-gohri](https://github.com/rohit-gohri))

- [PUB-52](https://honesttech.atlassian.net/browse/PUB-52) - Remove `grpc` ([#57](https://github.com/deliveryhero/hfc-pubsub/pull/57) by [@rohit-gohri](https://github.com/rohit-gohri))

- [PUB-48](https://honesttech.atlassian.net/browse/PUB-48) - Topic class now uses static properties and generics ([#81](https://github.com/deliveryhero/hfc-pubsub/pull/81) by [@rohit-gohri](https://github.com/rohit-gohri))

- [PUB-77](https://honesttech.atlassian.net/browse/PUB-77) - Misc Changes ([#84](https://github.com/deliveryhero/hfc-pubsub/pull/84) by [@rohit-gohri](https://github.com/rohit-gohri))

  - Change project-id env var to `GOOGLE_CLOUD_PROJECT`
  - Removed export of private methods
  - Refactor internals
  - Change `ackDeadlineSeconds` to `ackDeadline`
  - Add `metadata` to default error handler

- [PUB-65](https://honesttech.atlassian.net/browse/PUB-65) - Remove deprecated code ([#66](https://github.com/deliveryhero/hfc-pubsub/pull/66) by [@rohit-gohri](https://github.com/rohit-gohri))

### Minor Changes

- [PUB-73](https://honesttech.atlassian.net/browse/PUB-73) - Add/improve helpers and TS usage([#79](https://github.com/deliveryhero/hfc-pubsub/pull/79) by [@ishan123456789](https://github.com/ishan123456789))

  1. Allows to make `_timestamp` optional
  2. Removes double validation of topic names.
  3. Use `publishJSON` instead of buffering the payload.
  4. Adds `.toJSON` method to get parsed message/
  5. Remove getters (like getProjects, getName, getClient) and just use `this.projects`, `this.name`, etc directly.

- [PUB-69](https://honesttech.atlassian.net/browse/PUB-69) - Changed init position for `SubscriptionService.instance` ([#77](https://github.com/deliveryhero/hfc-pubsub/pull/77) by [@ishan123456789](https://github.com/ishan123456789))

### Patch Changes

- [PUB-75](https://honesttech.atlassian.net/browse/PUB-75) - Using yarn instead of npm ([#83](https://github.com/deliveryhero/hfc-pubsub/pull/83) by [@ishan123456789](https://github.com/ishan123456789))

- [PUB-69](https://honesttech.atlassian.net/browse/PUB-69) - Throws error in case no subs found or wrong `PUBSUB_ROOT_DIR` env defined ([#76](https://github.com/deliveryhero/hfc-pubsub/pull/76) by [@ishan123456789](https://github.com/ishan123456789))

**Full Changelog: [v1.11.0...v2.0.0](https://github.com/deliveryhero/hfc-pubsub/compare/v1.11.0...v2.0.0)**

## 1.11.0

### Minor Changes

- Adds optional health check server to tell if all subs are open or not ([#73](https://github.com/deliveryhero/hfc-pubsub/pull/73) by [@ishan123456789](https://github.com/ishan123456789))

- [PUB-71](https://honesttech.atlassian.net/browse/PUB-71) - Add Subscription level handleError method ([#75](https://github.com/deliveryhero/hfc-pubsub/pull/75) by [@ketan-saxena](https://github.com/ketan-saxena))

### Patch Changes

- [PUB-64](https://honesttech.atlassian.net/browse/PUB-64) - Update dependencies ([#78](https://github.com/deliveryhero/hfc-pubsub/pull/78) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.10.4

### Patch Changes

- [PUB-60](https://honesttech.atlassian.net/browse/PUB-60) - Deprecate v1,v2 style Subscriber classes ([#64](https://github.com/deliveryhero/hfc-pubsub/pull/64) by [@rohit-gohri](https://github.com/rohit-gohri))

- [PUB-66](https://honesttech.atlassian.net/browse/PUB-66) - Fix close method creating new subscription instance rather than closing existing one ([#63](https://github.com/deliveryhero/hfc-pubsub/pull/63) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.10.3

### Patch Changes

- [PUB-52](https://honesttech.atlassian.net/browse/PUB-52) - Deprecate native grpc usage ([#58](https://github.com/deliveryhero/hfc-pubsub/pull/58) by [@rohit-gohri](https://github.com/rohit-gohri))

- Allows setting up env variables through CLI args ([#61](https://github.com/deliveryhero/hfc-pubsub/pull/61) by [@ishan123456789](https://github.com/ishan123456789))

- [PUB-50](https://honesttech.atlassian.net/browse/PUB-50) - Update documentation ([#60](https://github.com/deliveryhero/hfc-pubsub/pull/60) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.10.2

### Patch Changes

- Update google-cloud/pubsub package version ([#55](https://github.com/deliveryhero/hfc-pubsub/pull/55) by [@ketan-saxena](https://github.com/ketan-saxena))

## 1.10.1

### Patch Changes

- Undoes logger changes for list cli ([#48](https://github.com/deliveryhero/hfc-pubsub/pull/48) by [@ishan123456789](https://github.com/ishan123456789))

- Upgrade dependencies ([#51](https://github.com/deliveryhero/hfc-pubsub/pull/51) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.10.0

### Minor Changes

- [PUB-44](https://honesttech.atlassian.net/browse/PUB-44) - Added option to add custom logger ([#45](https://github.com/deliveryhero/hfc-pubsub/pull/45) by [@ishan123456789](https://github.com/ishan123456789))

### Patch Changes

- [PUB-44](https://honesttech.atlassian.net/browse/PUB-44) - Add changesets to manage versioning ([#44](https://github.com/deliveryhero/hfc-pubsub/pull/44) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.9.0

### Minor Changes

- [PUB-47](https://honesttech.atlassian.net/browse/PUB-47) - Optimized DLQ configuration making PROJECT_NUMBER optional for assigning Publisher, Subscriber roles and allowing default subscription creation as a part of DLQ configuration ([#43](https://github.com/deliveryhero/hfc-pubsub/pull/43) by [@ishan123456789](https://github.com/ishan123456789))

## 1.8.1

### Patch Changes

- [PUB-46](https://honesttech.atlassian.net/browse/PUB-46) - Allow multiple entry points without checking for folder ([#42](https://github.com/deliveryhero/hfc-pubsub/pull/42) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.8.0

### Minor Changes

- [PUB-42](https://honesttech.atlassian.net/browse/PUB-42) - Add attributes option to publish command in Topic ([#41](https://github.com/deliveryhero/hfc-pubsub/pull/41) by [@rohit-gohri](https://github.com/rohit-gohri))

### Patch Changes

- [PUB-34](https://honesttech.atlassian.net/browse/PUB-34) - Update subscriber metadata for existing subscriptions ([#32](https://github.com/deliveryhero/hfc-pubsub/pull/32) by [@ishan123456789](https://github.com/ishan123456789))

- [PUB-43](https://honesttech.atlassian.net/browse/PUB-43) - Attach subscriber metadata to error object in case unable to start subscription ([#39](https://github.com/deliveryhero/hfc-pubsub/pull/39) by [@rohit-gohri](https://github.com/rohit-gohri))

## 1.7.12

### Patch Changes

- Fix build due to invalid import paths ([#38](https://github.com/deliveryhero/hfc-pubsub/pull/38) by [@rohit-gohri](https://github.com/rohit-gohri))

- [PUB-31](https://honesttech.atlassian.net/browse/PUB-31) - Add close method for graceful shutdowns ([#20](https://github.com/deliveryhero/hfc-pubsub/pull/20) by [@rohit-gohri](https://github.com/rohit-gohri))
