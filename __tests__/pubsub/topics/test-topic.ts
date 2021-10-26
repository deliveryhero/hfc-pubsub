import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

export interface Payload extends BasePayload {
  data: string;
}

export default class TestTopic extends Topic<Payload> {
  static readonly topicName = 'test-topic';
}
