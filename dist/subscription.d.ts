import { Message } from '@google-cloud/pubsub';
interface SubscriptionConfig {
    topicName: string;
    subscriptionName: string;
    description?: string;
}
export default abstract class Subscription implements SubscriptionConfig {
    topicName: string;
    subscriptionName: string;
    description: string;
    protected maxMessages: number;
    protected ackDeadlineSeconds: number;
    constructor();
    init(): void;
    handleMessage(message: Message): Promise<void>;
    getMaxMessages(): number;
    getAckDeadlineSeconds(): number;
    getDescription(): string;
    getTopicName(): string;
    getSubscriptionName(): string;
}
export {};
