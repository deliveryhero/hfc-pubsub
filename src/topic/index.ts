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
  retryConfig?: RetryConfig;
  enableGZipCompression?: boolean;
}

export interface TopicProperties {
  topicName: string;
  project?: GooglePubSubProject;
  enableGZipCompression?: boolean;
}

export default class Topic<P extends Payload = Payload> {
  public static readonly topicName: string;
  public static project?: GooglePubSubProject;

  public options: TopicOptions = {
    addTimeStamp: true,
    retryConfig: {
      retryCodes: [10, 1, 4, 13, 8, 14, 2],
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

  private mq: PubSubService;
  public constructor() {
    this.mq = PubSubService.getInstance();
    (this.constructor as typeof Topic).validateTopic(
      (this.constructor as typeof Topic).topicName,
    );
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

  public async publish(
    message: PayloadInput<P>,
    options?: TopicPublishOptions,
  ): Promise<string> {
    this.validateMessage(message);

    let publishOptions = { ...options };
    if (this.options.enableGZipCompression) {
      publishOptions.enableGZipCompression = true;
    }
    if (this.options.retryConfig) {
      publishOptions = {
        ...publishOptions,
        retryConfig: {
          ...this.options?.retryConfig,
          ...publishOptions?.retryConfig,
          backoffSettings: {
            ...this.options?.retryConfig?.backoffSettings,
            ...publishOptions?.retryConfig?.backoffSettings,
          },
        },
      };
    }

    return this.mq.publish(
      this.constructor as typeof Topic,
      this.options?.addTimeStamp !== false
        ? {
            ...message,
            _timestamp: new Date().toISOString(),
          }
        : message,
      publishOptions as PublishOptions,
    );
  }
}
