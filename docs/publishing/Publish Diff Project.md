---
id: publish-diff-project
title: Publishing on a Different GCP project
sidebar_label: Different GCP project
sidebar_position: 3
---

```ts title="/pubsub/topics/example-topic-with-customCredentials.ts"
export default class ExampleTopic extends Topic {
  public readonly name = 'example-topic-with-customCredentials';
  public project: GooglePubSubProject = {
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
