import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */

export default class TestTopic extends Topic {
  readonly name = 'test.topic';
}

export interface Payload extends BasePayload {
  testPayload: any;
}
