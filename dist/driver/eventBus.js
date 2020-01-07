"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const message_1 = __importDefault(require("../message"));
class EventBus extends events_1.default {
    static getInstance() {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }
    async publish(topic, message) {
        EventBus.getInstance().emit(topic.getName(), message);
        return 'done';
    }
    async subscribe(subscriber) {
        EventBus.getInstance().addListener(subscriber.topicName, async (message) => {
            const instance = new subscriber();
            instance.init();
            await instance.handleMessage(message_1.default.from(message));
        });
    }
}
exports.default = EventBus;
EventBus.status = 'pending';
