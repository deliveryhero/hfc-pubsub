import http from 'http';
import { TopicProperties } from '../topic';
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
  private server?: http.Server;

  private constructor() {
    this.initDriver();
    this.initClient();
    this.startServer();
    this.bind(this);
  }

  private startServer(): void {
    if (process.env.PUBSUB_HEALTH_SERVER !== 'true') return;
    if (this.server) return;

    const port = process.env.PUBSUB_SERVER_PORT || 8080;
    //create a server object:
    this.server = http
      .createServer(function (_req, res) {
        const isHealthy = PubSubService.isHealthy();
        if (isHealthy) {
          res.write(`is healthy`); //write a response to the client
          res.end(); //end the response
        } else {
          res.statusCode = 500;
          res.write(`Not healthy`); //write a response to the client
          res.end(); //end the response
        }
      })
      .listen(port, () => {
        Logger.Instance.info(`Pubsub server running on port ${port}`);
      }); //the server object listens on port 8080
  }

  public static isHealthy(): boolean {
    if (PubSubService.status !== 'ready') {
      Logger.Instance.warn('All subscriptions are not ready yet');
      return false;
    }

    const subsState = PubSubService.client.getAllSubscriptionsState();
    const allSubs = PubSubService.getInstance().getSubscribers();

    const notOpenSubs = subsState
      .filter((subState) => !subState[1])
      .map((subState) => subState[0]);
    if (subsState.length !== allSubs.length) {
      Logger.Instance.warn("Some subs aren't active");
    }
    if (notOpenSubs.length) {
      Logger.Instance.warn(
        { subscriptions: notOpenSubs },
        "These subs aren't open yet",
      );
    }
    return !(notOpenSubs.length || subsState.length !== allSubs.length);
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
  public async publish<T extends TopicProperties>(
    topic: T,
    message: Record<string, unknown>,
    options?: PublishOptions,
  ): Promise<string> {
    if (this.shouldStartSynchronousSubscriptions()) {
      await this.startSubscriptions();
    }
    return await PubSubService.client.publish(topic, message, options);
  }

  private shouldStartSynchronousSubscriptions(): boolean {
    return (
      PubSubService.driver === 'synchronous' && PubSubService.status !== 'ready'
    );
  }

  public getSubscribers(): Subscribers {
    return SubscriptionService.getSubscribers();
  }

  public async closeAll(): Promise<void> {
    const subscribers = this.getSubscribers();
    for (const subscription of subscribers) {
      await PubSubService.client.close(subscription);
    }
    PubSubService.status = 'closed';
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(this.server);
          }
        });
      });
    }
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
    if (subscribers.length === 0) {
      Logger.Instance.warn(
        `   ❌      No Subscribers were found at ${process.env.PUBSUB_ROOT_DIR}`,
      );
    } else {
      Logger.Instance.info(
        `   ✅      All subscriptions started successfully.`,
      );
    }
  }

  /**
   * Subscribes to any given topic
   */
  public async subscribe(subscription: SubscriberTuple): Promise<void> {
    return PubSubService.client.subscribe(subscription);
  }

  /**
   * Retrieves a list of subscribers
   */
  public async getAllSubscriptions(): Promise<AllSubscriptions[]> {
    return PubSubService.client.getAllSubscriptions();
  }
}
