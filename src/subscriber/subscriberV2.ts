import { SubscriberOptions as GoogleCloudSubscriberOptions } from '@google-cloud/pubsub/build/src/subscriber';
import { GooglePubSubProject } from '../interface/GooglePubSubProject';
import Message from '../message';

const defaultSubscriberOptions = {
  ackDeadline: 30,
  flowControl: {
    maxMessages: 5,
  },
};

export default class SubscriberV2 {
  public metadata?: SubscriberMetadata;

  public constructor(private subscriberObject?: SubscriberObject) {
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
   */
  public static from(
    subscriber: SubscriberObject,
    subscriptionServiceDefaultOptions: SubscriberOptions,
  ): typeof SubscriberV2 {
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
