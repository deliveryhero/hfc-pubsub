require('dotenv').config({ path: require('find-config')('.env') });
import PubSubService from "../src/pubsub.service";
import ExampleTopic from "./pubsub/topics/example.topic";
import ExampleSubscription from "./pubsub/subscriptions/example.subscription-ts";
const mockCreateTopic = jest.fn()
const mockSubscriptionFn = jest.fn(() => ({ exists: () => { return false } } ));
const mockCreateSubscriptionFn = jest.fn();
const mockPublish = jest.fn();
const mockTopic = jest.fn().mockImplementation(() => {
    return new class {
        public async get()  { return mockCreateTopic() }
        public publish() { return mockPublish() }
        public subscription() { return mockSubscriptionFn() }
        public async createSubscription() { return mockCreateSubscriptionFn() }
    }
});
console.log = () => null;

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn().mockImplementation(() => ({
    topic: mockTopic,
    publish: jest.fn(),
    subscription: () => { return { on: jest.fn() } },
  })),
}));

let service;
let subscription;
let topic;
describe('pubsub.service', () => {
    beforeAll(() => {
        service = new PubSubService();
        subscription = new ExampleSubscription();
        topic = new ExampleTopic();
    })
    beforeEach(() => {
        jest.clearAllMocks();
    })
    it('should handle subscriptions', async () => {
        await service.subscribe(subscription);
        expect(mockSubscriptionFn.mock.calls.length).toBe(1)
        expect(mockCreateSubscriptionFn.mock.calls.length).toBe(1)
    });
    it('should handle publishing', async () => {
        await service.publish(topic, subscription);
        expect(mockPublish.mock.calls.length).toBe(1)
    });
    it('should handle creating a topic if it doesn\'t exist when a subscription is started', () => {
        service.subscribe(subscription)
        expect(mockCreateTopic.mock.calls.length).toBe(1)
    });
});