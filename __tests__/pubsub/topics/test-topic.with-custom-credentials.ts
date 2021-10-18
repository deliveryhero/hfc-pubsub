import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';
import { GooglePubSubProject } from '../../../src/interface';

export interface Payload extends BasePayload {
  data: string;
}

export default class TestTopicCustomCreds extends Topic<Payload> {
  static readonly topicName = 'test-topic.with-custom-credentials';
  static project: GooglePubSubProject = {
    id: 'custom-project-id',
    credentials: {
      client_email: 'client@google-auth.google.com',
      private_key: 'private_key_goes_here',
    },
  };
}
