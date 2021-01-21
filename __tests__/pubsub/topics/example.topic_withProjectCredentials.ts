import { GooglePubSubProject } from '../../../src/interface';
import Topic, { Payload as BasePayload } from '../../../src/topic';

/**
 * define your payload below
 * e.g.
 * ```typescript
 *     interface Payload extends BasePayload {
 *        id: number;
 *        action: string;
 *     }
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Payload extends BasePayload {
  data: string;
}

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
