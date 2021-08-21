# HFC PubSub Framework

## 1.10.2

### Patch Changes

- Update google-cloud/pubsub package version ([#55](https://github.com/deliveryhero/hfc-pubsub/pull/55) by [@ketan-saxena](https://github.com/ketan-saxena))

## 1.10.1

### Patch Changes

- Undoes logger changes for list cli ([#48](https://github.com/deliveryhero/hfc-pubsub/pull/48) by [@ishan123456789](https://github.com/ishan123456789))

* Upgrade dependencies ([#51](https://github.com/deliveryhero/hfc-pubsub/pull/51) by [@rohit-gohri](https://github.com/rohit-gohri))

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
