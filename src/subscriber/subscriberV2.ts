import {
  SubscriberOptions as GoogleCloudSubscriberOptions,
  SubscriptionMetadata as GoogleSubscriptionMetadata,
} from '@google-cloud/pubsub';
import Pako from 'pako';
import { GooglePubSubProject } from '../interface/GooglePubSubProject';
import SubscriptionService from '../service/subscription';
import Message from '../message';

// TODO: Re-evaluate these or remove them
const defaultSubscriberOptions = {
  ackDeadline: 30,
  flowControl: {
    maxMessages: 5,
  },
};

export default class SubscriberV2 {
  public metadata: SubscriberMetadata;

  public constructor(private subscriberObject: SubscriberObject<any>) {
    const { topicName, subscriptionName, options } = subscriberObject;
    this.metadata = {
      topicName,
      subscriptionName,
      options,
    };
  }
  public async init(): Promise<void> {
    this.subscriberObject?.init && this.subscriberObject?.init();
  }

  public async handleMessage<T>(message: string | Message<T>): Promise<void> {
    if (!this.subscriberObject?.handleMessage) {
      return;
    }
    let msg = message;
    if (this.subscriberObject?.options?.enableGZipDecompression) {
      msg = this.decompressMessage<T>(message as string);
    }

    this.subscriberObject?.handleMessage(msg as Message<T>);
  }

  public handleError(error: Error): void {
    if (this.subscriberObject?.handleError) {
      this.subscriberObject?.handleError(error);
    } else {
      SubscriptionService.loadSubscriptionService().handleError(
        error,
        this.metadata,
      );
    }
  }

  private decompressMessage<T>(message: string): Message<T> {
    const gzip = JSON.parse(Buffer.from(message, 'base64').toString());
    const decompressed = Pako.ungzip(gzip, { to: 'string' });
    return JSON.parse(decompressed);
  }

  /**
   * Returns a SubscriberV2 instance with merged options
   */
  public static from(
    subscriber: SubscriberObject,
    subscriptionServiceDefaultOptions: SubscriberOptions,
  ): SubscriberV2 {
    const subscriberObject: SubscriberObject = { ...subscriber };
    // TODO: Use deepmerge instead
    subscriberObject.options = {
      ...defaultSubscriberOptions,
      ...subscriptionServiceDefaultOptions,
      ...subscriberObject.options,
      labels: {
        ...subscriptionServiceDefaultOptions?.labels,
        ...subscriberObject.options?.labels,
      },
    };
    return new SubscriberV2(subscriberObject);
  }
}

export interface SubscriberOptions extends GoogleCloudSubscriberOptions {
  project?: GooglePubSubProject;
  labels?: GoogleSubscriptionMetadata['labels'];
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
   * If true msg will be decompressed before being passed to the handler
   */
  enableGZipDecompression?: boolean;
}

export interface SubscriberMetadata {
  topicName: string;
  subscriptionName: string;
  description?: string;
  options?: SubscriberOptions;
}

export interface MessageHandler<T = unknown> {
  /**
   * will run every time a message is received
   */
  handleMessage: (message: Message<T>) => void;

  /**
   * will run before the message handler is attached to the subscription
   */
  init?: () => void;

  /**
   * If passed, it would serve as the error handler method for internal google pubsub errors
   */
  handleError?: (error: Error) => void;
}

export interface FlexibleObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface SubscriberObject<T = unknown>
  extends SubscriberMetadata,
    MessageHandler<T>,
    FlexibleObject {}
