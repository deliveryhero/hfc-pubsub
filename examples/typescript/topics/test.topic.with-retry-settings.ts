import {
  Topic,
  TopicOptions,
  Payload as BasePayload,
} from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */

export interface Payload extends BasePayload {
  testPayload: any;
}

export default class TestRetryTopic extends Topic<Payload> {
  static readonly topicName = 'test.topic.with-retry-settings';

  options: TopicOptions = {
    retryConfig: {
      retryCodes: [
        10 as const, // 'ABORTED'
        1 as const, // 'CANCELLED',
        4 as const, // 'DEADLINE_EXCEEDED'
        13 as const, // 'INTERNAL'
        8 as const, // 'RESOURCE_EXHAUSTED'
        14 as const, // 'UNAVAILABLE'
        2 as const, // 'UNKNOWN'
      ],
      backoffSettings: {
        initialRetryDelayMillis: 100,
        retryDelayMultiplier: 1.3,
        maxRetryDelayMillis: 60000,
        initialRpcTimeoutMillis: 5000,
        rpcTimeoutMultiplier: 1.0,
        maxRpcTimeoutMillis: 600000,
        totalTimeoutMillis: 600000,
      },
    },
  };
}
