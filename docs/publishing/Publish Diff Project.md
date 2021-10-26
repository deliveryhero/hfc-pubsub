---
id: publish-diff-project
title: Publishing on a Different GCP project
sidebar_label: Different GCP project
sidebar_position: 3
---

```ts title="/pubsub/topics/example-topic-with-custom-credentials.ts"
export default class ExampleTopic extends Topic {
  static readonly topicName = 'example-topic-with-custom-credentials';
  static project: GooglePubSubProject = {
    id: 'custom-project-id',
    credentials: {
      // eslint-disable-next-line
      client_email: 'client@google-auth.google.com',
      // eslint-disable-next-line
      private_key: 'private_key_goes_here'
    },
  };
}
```
