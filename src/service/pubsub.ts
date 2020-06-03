// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Topic, { Payload } from '../topic';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Subscriber from '../subscriber';
import EventBus from '../driver/eventBus';
import PubSubClient, { AllSubscriptions } from '../interface/pubSubClient';
import GooglePubSubAdapter from '../driver/googlePubSub';
import SubscriptionService from './subscription';

export default class PubSubService {
  protected static client: PubSubClient;
  protected static instance: PubSubService;
  protected static driver: 'synchronous' | 'google';
  private static status: 'ready' | 'pending' = 'pending';

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

  private initClient(): void {
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
  ): Promise<string> {
    this.validate(topic, message);
    if (this.shouldStartSynchronousSubscriptions()) {
      await this.startSubscriptions();
    }
    return await this.getClient().publish(topic, message);
  }

  private shouldStartSynchronousSubscriptions(): boolean {
    return (
      PubSubService.driver === 'synchronous' && PubSubService.status !== 'ready'
    );
  }

  private getClient(): PubSubClient {
    return PubSubService.client;
  }

  public getSubscribers(): typeof Subscriber[] {
    return SubscriptionService.getSubscribers();
  }

  public async startSubscriptions(): Promise<void> {
    if (PubSubService.status === 'ready') return;
    if (PubSubService.driver !== 'synchronous')
      SubscriptionService.loadSubscriptionService();
    for (const subscription of SubscriptionService.getSubscribers())
      await this.subscribe(subscription);
    PubSubService.status = 'ready';
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
  public async subscribe(subscription: typeof Subscriber): Promise<void> {
    return this.getClient().subscribe(subscription);
  }

  /**
   * Retrieves a list of subscribers
   */
  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    return this.getClient().getAllSubscriptions();
  }
}
