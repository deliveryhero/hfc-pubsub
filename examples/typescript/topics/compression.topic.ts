import {
  Topic,
  Payload as BasePayload,
  TopicOptions,
} from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */
export interface Payload extends BasePayload {
  testPayload: any;
}

export default class CompressionTopic extends Topic<Payload> {
  static readonly topicName = 'compression.topic';

  public options: TopicOptions = {
    enableGZipCompression: true,
  };
}
