import Topic, { Payload } from '../topic';
import { SubscriberTuple, Subscribers } from '../subscriber';
import EventBus from '../client/eventBus';
import { AllSubscriptions, PubSubClientV2 } from '../interface/pubSubClient';
import GooglePubSubAdapter from '../client/googlePubSub';
import { PublishOptions } from '../interface/publishOptions';
import SubscriptionService from './subscription';
import { Logger } from './logger';

export default class PubSubService {
  protected static client: PubSubClientV2;
  protected static instance: PubSubService;
  protected static driver: 'synchronous' | 'google';
  private static status: 'ready' | 'pending' | 'closed' = 'pending';

  private constructor() {
    this.initDriver();
    this.initClient();
    this.bind(this);
  }

  private bind(instance: PubSubService): void {
    this.subscribe = this.subscribe.bind(instance);
    this.publish = this.publish.bind(instance);
  }

  private initDriver(): void {
    if (this.syncDriverIsEnabled()) {
      PubSubService.driver = 'synchronous';
    } else {
      PubSubService.driver = 'google';
    }
  }

  private syncDriverIsEnabled(): boolean {
    return process.env.PUBSUB_DRIVER?.toLowerCase() == 'synchronous' || false;
  }

  public initClient(): void {
    if (PubSubService.driver === 'synchronous') {
      PubSubService.client = EventBus.getInstance();
    } else {
      PubSubService.client = GooglePubSubAdapter.getInstance();
    }
  }

  public static getInstance(): PubSubService {
    if (!PubSubService.instance) {
      PubSubService.instance = new PubSubService();
    }
    return PubSubService.instance;
  }

  /**
   * Publishes new orders to PubSub.
   */
  public async publish<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
    options: PublishOptions,
  ): Promise<string> {
    this.validate(topic, message);
    if (this.shouldStartSynchronousSubscriptions()) {
      await this.startSubscriptions();
    }
    return await this.getClient().publish(topic, message, options);
  }

  private shouldStartSynchronousSubscriptions(): boolean {
    return (
      PubSubService.driver === 'synchronous' && PubSubService.status !== 'ready'
    );
  }

  private getClient(): PubSubClientV2 {
    return PubSubService.client;
  }

  public getSubscribers(): Subscribers {
    return SubscriptionService.getSubscribers();
  }

  public async closeAll(): Promise<void> {
    const subscribers = this.getSubscribers();
    for (const subscription of subscribers) {
      await this.getClient().close(subscription);
    }
    PubSubService.status = 'closed';
  }

  public async startSubscriptions(): Promise<void> {
    if (PubSubService.status === 'ready') return;
    PubSubService.status = 'pending';

    const subscriptionServiceClass =
      SubscriptionService.loadSubscriptionService();

    subscriptionServiceClass.closeAll = this.closeAll.bind(this);

    await subscriptionServiceClass.init();

    const subscribers = subscriptionServiceClass.getSubscribers();
    for (const subscription of subscribers) {
      // @ts-expect-error weird const error
      if (PubSubService.status === 'closed') {
        Logger.Instance.warn(
          `   ❌      closeAll called and subscriptions closed, not continuing with startup process`,
        );

        return;
      }

      try {
        await this.subscribe(subscription);
      } catch (err) {
        const [, metadata] = subscription;
        Logger.Instance.error(
          { metadata, err },
          `   ❌      Error while initializing "${metadata.subscriptionName}" subscription.`,
        );
        const error: Error & {
          originalError?: Error;
          metadata?: typeof metadata;
        } = new Error('Error while initializing subscription.');
        error.originalError = err as Error;
        error.metadata = metadata;
        throw error;
      }
    }

    PubSubService.status = 'ready';
    Logger.Instance.info(`   ✅      All subscriptions started successfully.`);
  }

  /**
   * Validates Topic and Message according to validation rules set in Topic class
   * @param topic Topic
   * @param message Message
   */
  protected validate<T extends Topic, P extends Payload>(
    topic: T,
    message: P,
  ): void {
    topic.validateTopic(topic.getName());
    topic.validateMessage(message);
  }

  /**
   * Subscribes to any given topic
   */
  public async subscribe(subscription: SubscriberTuple): Promise<void> {
    return this.getClient().subscribe(subscription);
  }

  /**
   * Retrieves a list of subscribers
   */
  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    return this.getClient().getAllSubscriptions();
  }
}
