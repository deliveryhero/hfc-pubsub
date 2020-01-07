"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor() {
        this.data = Buffer.from('');
    }
    static from(message) {
        const instance = new Message();
        instance.data = Buffer.from(JSON.stringify(message));
        return instance;
    }
    static fromGCloud(message) {
        const instance = new Message();
        instance.data = message.data;
        instance.gCloudMessage = message;
        return instance;
    }
    ack() {
        if (this.gCloudMessage) {
            this.gCloudMessage.ack();
        }
    }
    modAck(deadline) {
        if (this.gCloudMessage) {
            this.gCloudMessage.modAck(deadline);
        }
    }
    nack() {
        if (this.gCloudMessage) {
            this.gCloudMessage.nack();
        }
    }
}
exports.default = Message;
