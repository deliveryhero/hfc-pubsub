import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */

export default class TestRetryTopic extends Topic {
  readonly name = 'test.topicRetryConfig';
  retryConfig = {
    retryCodes: [
      10, // 'ABORTED'
      1, // 'CANCELLED',
      4, // 'DEADLINE_EXCEEDED'
      13, // 'INTERNAL'
      8, // 'RESOURCE_EXHAUSTED'
      14, // 'UNAVAILABLE'
      2, // 'UNKNOWN'
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
  };
}

export interface Payload extends BasePayload {
  testPayload: any;
}
