import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */

export default class SimpleTopic extends Topic {
  readonly name = 'simple.topic';
}

export interface Payload extends BasePayload {
  testPayload: any;
}
