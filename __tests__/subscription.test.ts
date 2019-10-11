require('dotenv').config({ path: require('find-config')('.env') });
import TestSubscription from "./pubsub/subscriptions/example.subscription-ts";

const mockTopic = jest.fn().mockImplementation(() => ({
    get: jest.fn(),
    publish: jest.fn(),
  }))
const mockPublish = jest.fn();
const mockSubscribe = jest.fn();
jest.mock('@google-cloud/pubsub', () => ({
    __esModule: true,
    PubSub: jest.fn().mockImplementation(() => ({
      topic: mockTopic,
      publish: jest.fn(),
    })),
  }));

  
  jest.mock('../src/pubsub.service', () => ({
    default: class {
      public static getInstance() {
        return new this;
      }
      public publish() {
        return mockPublish();
      }
      public subscribe() {
          return mockSubscribe();
      }
    }
  }))
  jest.mock('@google-cloud/pubsub', () => ({
    __esModule: true,
    PubSub: jest.fn().mockImplementation(() => ({
      topic: mockTopic,
      publish: jest.fn(),
    })),
  }));
  


describe('subscription', () => {
    it('getters should return correct values', async() => {
      const sub = new TestSubscription;
      expect(sub.getTopicName()).toBe('test-topic');
      expect(sub.getSubscriptionName()).toBe('test-topic.subscription');
      expect(sub.getDescription()).toBe('Just a test subscription');
      expect(typeof sub.handleMessage).toBe('function');
      expect(sub.getAckDeadlineSeconds()).toBe(10);
      expect(sub.getMaxMessages()).toBe(1);
    });
    it('should start subscriptions on start', () => {
      const sub = new TestSubscription();
      sub.start();
      expect(mockSubscribe.mock.calls.length).toBe(1);
    })
});