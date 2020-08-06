import PubSubService from '../service/pubsub';
import { RecursivePartial, RetryConfig } from 'interface/retryConfig';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _timestamp?: string;
}

interface NamedTopic {
  readonly name: string;
}

export default class Topic implements NamedTopic {
  public readonly name: string = '';
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
  public validateMessage(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    message: Payload,
  ): void {
    message;
  }

  public async publish<T extends Payload>(
    message: T,
    customRetryConfig?: RecursivePartial<RetryConfig>,
  ): Promise<string> {
    this.validateTopic(this.getName());
    this.validateMessage(message);
    return this.mq.publish(
      this,
      {
        ...message,
        _timestamp: new Date().toISOString(),
      },
      {
        ...this.retryConfig,
        ...customRetryConfig,
        ...(customRetryConfig?.backoffSettings && {
          backoffSettings: {
            ...this.retryConfig.backoffSettings,
            ...customRetryConfig?.backoffSettings,
          },
        }),
      } as RetryConfig,
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
