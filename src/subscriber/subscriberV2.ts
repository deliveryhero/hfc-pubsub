import util from 'util';
import { SubscriberOptions as GoogleCloudSubscriberOptions } from '@google-cloud/pubsub/build/src/subscriber';
import { Logger } from '../service/logger';
import { GooglePubSubProject } from '../interface/GooglePubSubProject';
import Message from '../message';
import Subscriber from './subscriber';

export type SubscriberVersion = 'v1' | 'v2' | 'v3';

const defaultSubscriberOptions = {
  ackDeadline: 30,
  flowControl: {
    maxMessages: 5,
  },
};

export default class SubscriberV2 extends Subscriber {
  public metadata?: SubscriberMetadata;

  public constructor(private subscriberObject?: SubscriberObject) {
    super();
    this.metadata = subscriberObject;
  }
  public async init(): Promise<void> {
    this.subscriberObject?.init && this.subscriberObject?.init();
  }

  public async handleMessage(message: Message): Promise<void> {
    this.subscriberObject?.handleMessage &&
      this.subscriberObject?.handleMessage(message);
  }

  public handleError(error: Error): void {
    if (this.subscriberObject?.handleError) {
      this.subscriberObject?.handleError(error);
    } else {
      // default error handling logic
      Logger.Instance.error(
        {
          metadata: this.metadata,
          error,
        },
        'Received Unexpected Error',
      );
      process.exit(1);
    }
  }

  /**
   * Returns a Subscriber class when given a SubscriberObject or a Subscriber (returns its own input if it's already a v2 class)
   * @param subscriber {SubscriberObject} | {typeof Subscriber}
   * @param version {SubscriberVersion}
   */
  public static from(
    subscriber: SubscriberObject | typeof Subscriber,
    version: SubscriberVersion,
    subscriptionServiceDefaultOptions: SubscriberOptions,
  ): typeof SubscriberV2 {
    switch (version) {
      case 'v1': {
        // we're going to upgrade v1 subscriber to v2
        const subscriberClass = subscriber as typeof Subscriber;
        return class extends subscriberClass {
          metadata = {
            topicName: subscriber.topicName,
            subscriptionName: subscriber.subscriptionName,
            description: subscriber.description,
            options: {
              ackDeadline:
                subscriber.ackDeadlineSeconds !== undefined
                  ? subscriber.ackDeadlineSeconds
                  : subscriptionServiceDefaultOptions.ackDeadline,
              flowControl: {
                maxMessages:
                  subscriber.maxMessages !== undefined
                    ? subscriber.maxMessages
                    : subscriptionServiceDefaultOptions.flowControl
                        ?.maxMessages,
              },
            },
          };

          constructor(...args: unknown[]) {
            // @ts-expect-error no params in type
            super(...args);
            util.deprecate(() => {
              Logger.Instance.warn(
                {
                  metadata: this.metadata,
                },
                'Class style subscriptions have been deprecated, please convert to objects. This will be removed in v2.x',
              );
            }, `Class style subscriptions have been deprecated: ${subscriber.subscriptionName}`)();
          }

          public static from(
            subscriberClass: SubscriberObject | typeof Subscriber,
            version: SubscriberVersion,
          ): typeof SubscriberV2 {
            return SubscriberV2.from(
              subscriberClass,
              version,
              subscriptionServiceDefaultOptions,
            );
          }

          public static getSubscriberVersion(
            subscriberClass: typeof Subscriber,
          ): SubscriberVersion {
            return SubscriberV2.getSubscriberVersion(subscriberClass);
          }
        };
      }
      case 'v2':
        const subscriberClass = subscriber as unknown as typeof SubscriberV2;
        const subscriberObj = new subscriberClass();
        if (!subscriberObj.metadata) {
          throw new Error('A subscriber must contain a metadata property');
        }

        subscriberObj.metadata.options = {
          ...defaultSubscriberOptions,
          ...subscriptionServiceDefaultOptions,
          ...subscriberObj.metadata.options,
        };

        return class extends subscriberClass {
          constructor(...args: any[]) {
            super(...args);
            util.deprecate(() => {
              Logger.Instance.warn(
                {
                  metadata: subscriberObj.metadata,
                },
                'Class style subscriptions have been deprecated, please convert to objects. This will be removed in v2.x',
              );
            }, `Class style subscriptions have been deprecated: ${subscriberObj.metadata?.subscriptionName}`)();
          }

          metadata = subscriberObj.metadata;
          handleError =
            subscriberObj.handleError ||
            subscriptionServiceDefaultOptions.handleError;
        };

      case 'v3':
        const subscriberObject = subscriber as unknown as SubscriberObject;
        subscriberObject.options = {
          ...defaultSubscriberOptions,
          ...subscriptionServiceDefaultOptions,
          ...subscriberObject.options,
        };
        return class extends SubscriberV2 {
          constructor() {
            super(subscriberObject);
          }
        };
      default:
        return subscriber as unknown as typeof SubscriberV2;
    }
  }

  public static getSubscriberVersion(subscriber: unknown): SubscriberVersion {
    if (typeof subscriber === 'function') {
      try {
        const subscriberInstance = new (subscriber as typeof Subscriber)();
        if (
          Object.getOwnPropertyNames(subscriberInstance).includes('metadata')
        ) {
          return 'v2';
        } else {
          return 'v1';
        }
      } catch (e) {
        return 'v1';
      }
    }
    if (typeof subscriber === 'object') {
      return 'v3';
    }
    throw new Error(
      'Invalid Subscriber: Unable to determine Subscriber Version.',
    );
  }
}

export interface SubscriberOptions extends GoogleCloudSubscriberOptions {
  ackDeadlineSeconds?: number;
  project?: GooglePubSubProject;
  deadLetterPolicy?: {
    deadLetterTopic: string;
    maxDeliveryAttempts: number;
    createDefaultSubscription?: boolean;
  };
  retryPolicy?: {
    minimumBackoff: {
      seconds: number; // "10s"-"599s"
      nanos?: number;
    };
    maximumBackoff: {
      seconds: number; // "11s"-"600s"
      nanos?: number;
    };
  };

  /**
   *   An expression written in the Pub/Sub [filter
   *   language](https://cloud.google.com/pubsub/docs/filtering). If non-empty,
   *   then only `PubsubMessage`s whose `attributes` field matches the filter are
   *   delivered on this subscription. If empty, then no messages are filtered
   *   out.
   * */
  filter?: string;

  /**
   *   If true, messages published with the same `ordering_key` in `PubsubMessage`
   *   will be delivered to the subscribers in the order in which they
   *   are received by the Pub/Sub system. Otherwise, they may be delivered in
   *   any order.
   */
  enableMessageOrdering?: boolean;

  /**
   *   If passed, it would serve as the default error handler method for SubscriptionService
   */
  handleError?: (error: Error) => void;
}

export interface SubscriberMetadata {
  topicName: string;
  subscriptionName: string;
  description?: string;
  options?: SubscriberOptions;
}

export interface MessageHandler {
  /**
   * will run every time a message is received
   */
  handleMessage: (message: Message) => void;

  /**
   * will run every time a message is received before the handleMessage function is called
   */
  init?: () => void;

  /**
   *   If passed, it would serve as the default error handler method in case
   *   subscriber specific handler is not present
   */
  handleError?: (error: Error) => void;
}

export interface FlexibleObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SubscriberObject
  extends SubscriberMetadata,
    MessageHandler,
    FlexibleObject {}
