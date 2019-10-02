/* eslint-disable prettier/prettier */
import PubSubService from "./pubsub.service";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Message } from "@google-cloud/pubsub";

interface SubscriptionConfig {
  topicName: string;
  subscriptionName: string;
  description?: string;
  mongooseConnection: any;
  setMongooseConnection(connection: any): this;
}

export default abstract class Subscription implements SubscriptionConfig {
  public topicName: string = "";
  public subscriptionName: string = "";
  public description: string = "";
  public mongooseConnection: any;
  protected pubSubService: PubSubService;
  protected maxMessages = 1;

  /**
   * Acknowledge deadline in seconds. If left
   * unset the initial value will be 10 seconds, but it will evolve into the
   * 99th percentile time it takes to acknowledge a message
   */
  protected ackDeadlineSeconds: number = 10;

  public constructor() {
    this.pubSubService = PubSubService.getInstance();
    this.handleMessage = this.handleMessage.bind(this);
    this.start = this.start.bind(this);
  }

  public setMongooseConnection(connection: any): this {
    this.mongooseConnection = connection;
    return this;
  }
  public async start(): Promise<void> {
    this.pubSubService.subscribe(this);
  }
  public init(): void {}

  public handleMessage(message: Message): void {
    message;
  }
  public getMaxMessages(): number {
    return this.maxMessages;
  }
  public getAckDeadlineSeconds(): number {
    return this.ackDeadlineSeconds;
  }
  public getDescription(): string {
    return this.description;
  }
  public getTopicName(): string {
    return this.topicName;
  }
  public getSubscriptionName(): string {
    return this.subscriptionName;
  }
}
