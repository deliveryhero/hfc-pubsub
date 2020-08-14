import Subscriber from './subscriber';
import Message from '../message';
import { SubscriberOptions as GoogleCloudSubscriberOptions } from '@google-cloud/pubsub/build/src/subscriber';
import defaults from 'defaults';

export type SubscriberVersion = 'v1' | 'v2' | 'v3';
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

  /**
   * Returns a Subscriber class when given a SubscriberObject or a Subscriber (returns its own input if it's already a v2 class)
   * @param subscriber {SubscriberObject} | {typeof Subscriber}
   * @param version {SubscriberVersion}
   */
  public static from(
    subscriber: SubscriberObject | typeof Subscriber,
    version: SubscriberVersion,
    defaultOptions: SubscriberOptions,
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
                  : defaultOptions.ackDeadline,
              flowControl: {
                maxMessages:
                  subscriber.maxMessages !== undefined
                    ? subscriber.maxMessages
                    : defaultOptions.flowControl?.maxMessages,
              },
            },
          };

          public static from(
            subscriberClass: SubscriberObject | typeof Subscriber,
            version: SubscriberVersion,
          ): typeof SubscriberV2 {
            return SubscriberV2.from(subscriberClass, version, defaultOptions);
          }

          public static getSubscriberVersion(
            subscriberClass: typeof Subscriber,
          ): SubscriberVersion {
            return SubscriberV2.getSubscriberVersion(subscriberClass);
          }
        };
      }
      case 'v2':
        const subscriberClass = (subscriber as unknown) as typeof SubscriberV2;
        const subscriberObj = new subscriberClass();
        if (!subscriberObj.metadata) {
          throw new Error('A subscriber must contain a metadata property');
        }
        if (!subscriberObj.metadata.options) {
          subscriberObj.metadata.options = {};
        }

        defaults(subscriberObj.metadata.options, defaultOptions);
        return class extends subscriberClass {
          metadata = subscriberObj.metadata;
        };

      case 'v3':
        const subscriberObject = (subscriber as unknown) as SubscriberObject;
        if (!subscriberObject.options) {
          subscriberObject.options = {};
        }
        defaults(subscriberObject.options, defaultOptions);
        return class extends SubscriberV2 {
          constructor() {
            super(subscriberObject);
          }
        };
      default:
        return (subscriber as unknown) as typeof SubscriberV2;
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
  deadLetterPolicy?: {
    deadLetterTopic: string;
    maxDeliveryAttempts: number;
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
}

export interface FlexibleObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SubscriberObject
  extends SubscriberMetadata,
    MessageHandler,
    FlexibleObject {}
