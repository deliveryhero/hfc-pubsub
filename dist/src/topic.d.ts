import PubSubService from "./pubsub.service";
export interface Payload {
    _timestamp?: string;
}
interface NamedTopic {
    readonly name: string;
}
export default class Topic implements NamedTopic {
    readonly name: string;
    protected mq: PubSubService;
    constructor();
    validateMessage(message: Payload): void;
    publish<T extends Payload>(message: T): void;
    getName(): string;
    validateTopic(name: string): void;
}
export {};
