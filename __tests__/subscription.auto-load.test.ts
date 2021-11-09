import { SubscriptionService } from '@honestfoodcompany/pubsub';
import { SubscriberTuple } from '../src/subscriber';
import generateMockMessage from './helpers/generateMockMessage';

const mockPubSub = jest.fn();

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: mockPubSub,
}));

const mockPublish = jest.fn();
jest.mock('../src/service/pubsub', () => ({
  __esModule: true,
  default: class {
    public static getInstance() {
      console.log('getting instance');
      return new this();
    }
    public publish() {
      return mockPublish();
    }
  },
}));

describe('@auto-load subscription tests', () => {
  let subscriptions: SubscriberTuple[];
  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
  });

  it('should find autoload subscription', () => {
    expect(JSON.stringify(subscriptions)).toContain(
      'test-topic.example.auto-load.subscription',
    );
    expect(
      subscriptions.find(
        (subscription) =>
          subscription[1].subscriptionName ===
          'test-topic.example.auto-load.subscription',
      ),
    ).toBeTruthy();
  });

  it('should handle a message', () => {
    const subscriberTuple = subscriptions.find(
      (subscription) =>
        subscription[1].subscriptionName ===
        'test-topic.example.auto-load.subscription',
    );
    expect(subscriberTuple).toBeDefined();
    if (!subscriberTuple) throw new Error('Invalid subscriber');
    const [subscriber, metadata] = subscriberTuple;
    expect(() =>
      subscriber.handleMessage(generateMockMessage({ subscriber: metadata })),
    ).not.toThrow();
    expect(JSON.stringify(subscriptions)).toContain(
      'test-topic.example.auto-load.subscription',
    );
  });
});
