import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */
export interface Payload extends BasePayload {
  testPayload: any;
}

export default class SimpleTopic extends Topic<Payload> {
  static readonly topicName = 'simple.topic';
}
