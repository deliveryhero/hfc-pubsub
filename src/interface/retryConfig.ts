export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type RetryCodesAllowed =
  | 10 // 'ABORTED'
  | 1 // 'CANCELLED',
  | 4 // 'DEADLINE_EXCEEDED'
  | 13 // 'INTERNAL'
  | 8 // 'RESOURCE_EXHAUSTED'
  | 14 // 'UNAVAILABLE'
  | 2; // 'UNKNOWN'

/**
 *  https://github.com/googleapis/nodejs-pubsub/blob/master/samples/publishWithRetrySettings.js
 * 
    // Retry settings control how the publisher handles retryable failures
    // Default values are shown
    const retrySettings = {
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
 */
export interface RetryConfig {
  retryCodes: RetryCodesAllowed[];
  backoffSettings: BackoffSettings;
}

export interface BackoffSettings {
  initialRetryDelayMillis: number;
  retryDelayMultiplier: number;
  maxRetryDelayMillis: number;
  initialRpcTimeoutMillis: number;
  rpcTimeoutMultiplier: number;
  maxRpcTimeoutMillis: number;
  totalTimeoutMillis: number;
}
