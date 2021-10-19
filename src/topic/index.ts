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
}

export interface TopicProperties {
  topicName: string;
  project?: GooglePubSubProject;
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
  public static validateTopic(name: string): void {
    if (!name || name.length <= 6) {
      throw new Error('Invalid Topic Name!');
    }
  }

  /**
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
    return this.mq.publish(
      this.constructor as typeof Topic,
      this.options?.addTimeStamp !== false
        ? {
            ...message,
            _timestamp: new Date().toISOString(),
          }
        : message,
      (this.options?.retryConfig
        ? {
            ...options,
            retryConfig: {
              ...this.options?.retryConfig,
              ...options?.retryConfig,
              backoffSettings: {
                ...this.options?.retryConfig?.backoffSettings,
                ...options?.retryConfig?.backoffSettings,
              },
            },
          }
        : options) as PublishOptions,
    );
  }
}
