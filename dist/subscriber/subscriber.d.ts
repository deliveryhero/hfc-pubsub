import Message from '../message';
export default class Subscriber {
    static topicName: string;
    static subscriptionName: string;
    static description: string;
    static maxMessages: number;
    static ackDeadlineSeconds: number;
    constructor();
    init(): Promise<void>;
    handleMessage(_message: Message): Promise<void>;
}
