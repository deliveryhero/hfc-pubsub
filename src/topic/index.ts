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

export interface TopicOptions {
  readonly name: string;
  options?: { addTimeStamp?: boolean };
  project?: GooglePubSubProject;
}

export default class Topic<P extends Payload = Payload>
  implements TopicOptions
{
  public readonly name: string = '';
  options = { addTimeStamp: true };
  public project?: GooglePubSubProject;

  public retryConfig: RetryConfig = {
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
  };
  protected mq: PubSubService;

  public constructor() {
    this.mq = PubSubService.getInstance();
  }
  /**
   * @param message Message to be published
   */
  public validateMessage(message: Omit<P, keyof Payload>): void {
    message;
  }

  public async publish<T = Omit<P, keyof Payload>>(
    message: T,
    options?: TopicPublishOptions,
  ): Promise<string> {
    this.validateTopic(this.name);
    return this.mq.publish(
      this,
      this.options?.addTimeStamp
        ? {
            ...message,
            _timestamp: new Date().toISOString(),
          }
        : message,
      {
        ...this.retryConfig,
        ...options,
        ...(options?.backoffSettings && {
          backoffSettings: {
            ...this.retryConfig.backoffSettings,
            ...options?.backoffSettings,
          },
        }),
      } as PublishOptions,
    );
  }

  public validateTopic(name: string): void {
    if (!name || name.length <= 6) {
      throw new Error('Invalid Topic Name!');
    }
  }
}
