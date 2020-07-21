import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */

export interface Payload extends BasePayload {
  testPayload: any;
}

export default class TestTopic extends Topic {
  readonly name = 'test.topic';
}

/**
 * Publishing a message:
 */

new TestTopic().publish<Payload>({ testPayload: true });
