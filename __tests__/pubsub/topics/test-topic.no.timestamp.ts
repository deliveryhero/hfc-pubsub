import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

export interface Payload extends BasePayload {
  data: string;
}

export default class TestTopicNoTimeStamp extends Topic<Payload> {
  static readonly topicName = 'test-topic.no.timestamp';
  options = { addTimeStamp: false };
}
