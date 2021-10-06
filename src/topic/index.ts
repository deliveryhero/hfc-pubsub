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

export interface NamedTopic {
  readonly name: string;
}

export interface TopicWithCustomProject {
  project?: GooglePubSubProject;
}

export default class Topic implements NamedTopic, TopicWithCustomProject {
  public readonly name: string = '';
  public addTimeStamp = true;
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
   * @todo implement message validation logic. tried to link Topic and Message using static name methods, but hit a wall with subclass static inheritance typescript issues
   * @param message Message
   */
  public validateMessage(message: Payload): void {
    message;
  }

  public async publish<T extends Payload>(
    message: T,
    options?: TopicPublishOptions,
  ): Promise<string> {
    this.validateTopic(this.getName());
    return this.mq.publish(
      this,
      {
        ...message,
        ...(this.addTimeStamp && { _timestamp: new Date().toISOString() }),
      },
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

  public getName(): string {
    return this.name;
  }

  public validateTopic(name: string): void {
    if (!name || name.length <= 6) {
      throw new Error('Invalid Topic Name!');
    }
  }
}
