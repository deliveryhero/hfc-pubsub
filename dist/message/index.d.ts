/// <reference types="node" />
import { Message as GCloudMessage } from '@google-cloud/pubsub';
export default class Message {
    data: Buffer;
    gCloudMessage?: GCloudMessage;
    static from(message: any): Message;
    static fromGCloud(message: GCloudMessage): Message;
    ack(): void;
    modAck(deadline: number): void;
    nack(): void;
}
