require('dotenv').config({ path: require('find-config')('.env') });
import TestSubscription from './pubsub/subscriptions/example.subscription-ts';

const mockTopic = jest.fn().mockImplementation(() => ({
  get: jest.fn(),
  publish: jest.fn(),
}));
const mockPublish = jest.fn();
const mockSubscribe = jest.fn();
jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn().mockImplementation(() => ({
    topic: mockTopic,
    publish: jest.fn(),
  })),
}));

jest.mock('../src/service/pubsub', () => ({
  default: class {
    public static getInstance() {
      return new this();
    }
    public publish() {
      return mockPublish();
    }
    public subscribe() {
      return mockSubscribe();
    }
  },
}));
jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn().mockImplementation(() => ({
    topic: mockTopic,
    publish: jest.fn(),
  })),
}));

describe('subscription', () => {
  it('getters should return correct values', async () => {
    const sub = new TestSubscription();
    expect(TestSubscription.topicName).toBe('test-topic');
    expect(TestSubscription.subscriptionName).toBe('test-topic.subscription');
    expect(TestSubscription.description).toBe('Just a test subscription');
    expect(typeof sub.handleMessage).toBe('function');
    expect(TestSubscription.ackDeadlineSeconds).toBe(10);
    expect(TestSubscription.maxMessages).toBe(1);
  });
});
