import { Topic, Payload as BasePayload } from '@honestfoodcompany/pubsub';

/**
 * Defining a topic and payload:
 */

export default class TestRetryTopic extends Topic {
  readonly name = 'test.topic.with-retry-settings';
  retryConfig = {
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
  };
}

export interface Payload extends BasePayload {
  testPayload: any;
}
