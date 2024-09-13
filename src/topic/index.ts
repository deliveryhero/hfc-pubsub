import { TopicMetadata } from '@google-cloud/pubsub';
import { getMergedLabels } from '../utils';
import PubSubService from '../service/pubsub';
import {
  PublishOptions,
  RetryConfig,
  TopicPublishOptions,
} from '../interface/publishOptions';
import { GooglePubSubProject } from '../interface/GooglePubSubProject';

/**
 * extend this interface to define your own payload
 * e.g.
 * ```typescript
 *     interface YourTopicPayload extends Payload {
 *        id: number;
 *        action: string;
 *     }
 * ```
 */
export interface Payload {
  _timestamp?: string;
}

/**
 * Remove properties not required when publishing but only available when processing messages
 */
type PayloadInput<P extends Payload> = Omit<P, keyof Payload>;
export interface TopicOptions {
  addTimeStamp?: boolean;
  labels?: TopicMetadata['labels'];
  retryConfig?: RetryConfig;
  enableGZipCompression?: boolean;
}

export interface TopicProperties {
  topicName: string;
  project?: GooglePubSubProject;
}

export const defaultOptions: Omit<TopicOptions, 'labels'> = {
  // TODO: Disable this in next major version
  addTimeStamp: true,
  retryConfig: {
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
  },
};

export default class Topic<P extends Payload = Payload> {
  public static readonly topicName: string;
  public static project?: GooglePubSubProject;

  private _finalOptions: (PublishOptions & TopicOptions) | undefined;

  // TODO: Make options static in next major version to so it's easy to merge
  public options: TopicOptions = defaultOptions;

  private mq: PubSubService;
  public constructor() {
    this.mq = PubSubService.getInstance();
    (this.constructor as typeof Topic).validateTopic(
      (this.constructor as typeof Topic).topicName,
    );
    this.options.labels = getMergedLabels(this.options);
  }

  /**
   * This is run once when Topic is init to verify topic name
   * @param name topicName
   */
  public static validateTopic(name: string): void {
    if (!name || name.length <= 6) {
      throw new Error('Invalid Topic Name!');
    }
  }

  /**
   * This is run before publishing any messages, it is a no-op by default.
   * Can overwrite to perform checks against payload before publishing
   * @param message Message to be published
   */
  public validateMessage(message: PayloadInput<P>): void {
    message;
  }

  private getFinalOptions(): PublishOptions & TopicOptions {
    if (this._finalOptions) {
      return this._finalOptions;
    }
    const base: PublishOptions & TopicOptions = {
      ...defaultOptions,
      ...this.options,
      labels: getMergedLabels(this.options),
    };

    if (this.options.retryConfig) {
      base.retryConfig = {
        ...base.retryConfig,
        ...this.options.retryConfig,
        backoffSettings: {
          ...base.retryConfig?.backoffSettings,
          ...this.options.retryConfig?.backoffSettings,
        },
      };
    }
    this._finalOptions = base;
    return base;
  }

  public async publish(
    message: PayloadInput<P>,
    options?: TopicPublishOptions,
  ): Promise<string> {
    this.validateMessage(message);

    let finalOptions = this.getFinalOptions();
    if (options) {
      finalOptions = {
        ...finalOptions,
        ...options,
        retryConfig: {
          ...finalOptions.retryConfig,
          ...options.retryConfig,
          backoffSettings: {
            ...finalOptions.retryConfig?.backoffSettings,
            ...options.retryConfig?.backoffSettings,
          },
        },
      } as PublishOptions;
    }

    return this.mq.publish(
      this.constructor as typeof Topic,
      finalOptions.addTimeStamp !== false
        ? {
            ...message,
            _timestamp: new Date().toISOString(),
          }
        : message,
      finalOptions,
    );
  }
}
