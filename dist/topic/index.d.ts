import PubSubService from '../service/pubsub';
import { RecursivePartial, RetryConfig } from '../interface/retryConfig';
export interface Payload {
    _timestamp?: string;
}
interface NamedTopic {
    readonly name: string;
}
export default class Topic implements NamedTopic {
    readonly name: string;
    retryConfig: RetryConfig;
    protected mq: PubSubService;
    constructor();
    validateMessage(message: Payload): void;
    publish<T extends Payload>(message: T, customRetryConfig?: RecursivePartial<RetryConfig>): Promise<string>;
    getName(): string;
    validateTopic(name: string): void;
}
export {};
