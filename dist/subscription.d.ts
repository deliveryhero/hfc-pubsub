import PubSubService from "./pubsub.service";
import { Message } from "@google-cloud/pubsub";
interface SubscriptionConfig {
    topicName: string;
    subscriptionName: string;
    description?: string;
    mongooseConnection: any;
    setMongooseConnection(connection: any): this;
}
export default abstract class Subscription implements SubscriptionConfig {
    topicName: string;
    subscriptionName: string;
    description: string;
    mongooseConnection: any;
    protected pubSubService: PubSubService;
    protected maxMessages: number;
    protected ackDeadlineSeconds: number;
    constructor();
    setMongooseConnection(connection: any): this;
    start(): Promise<void>;
    init(): void;
    handleMessage(message: Message): Promise<void>;
    getMaxMessages(): number;
    getAckDeadlineSeconds(): number;
    getDescription(): string;
    getTopicName(): string;
    getSubscriptionName(): string;
}
export {};
