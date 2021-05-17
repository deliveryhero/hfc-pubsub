const path = require('path');
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from '../src/service/subscription';
import { Subscribers } from '../src/subscriber';
import generateMockMessage from './helpers/generateMockMessage';

const mockPubSub = jest.fn();

process.env.PUBSUB_ROOT_DIR = path.resolve(__dirname, 'pubsub');

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: mockPubSub,
}));

const mockPublish = jest.fn();
jest.mock('../src/service/pubsub', (): any => ({
  __esModule: true,
  default: class {
    public static getInstance(): any {
      console.log('getting instance');
      return new this();
    }
    public publish(): any {
      return mockPublish();
    }
  },
}));

describe('subscription v2 test', (): any => {
  let subscriptions: Subscribers;
  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
  });

  it('should find autoload subscription', async (): Promise<any> => {
    expect(JSON.stringify(subscriptions)).toContain(
      'test.auto-load-subscription',
    );
    expect(
      subscriptions.find(
        subscription =>
          subscription[1].subscriptionName === 'test.auto-load-subscription',
      ),
    ).toBeTruthy();
  });

  it('should find handle a message', async (): Promise<any> => {
    const subscriberTuple = subscriptions.find(
      subscription =>
        subscription[1].subscriptionName === 'test.auto-load-subscription',
    );
    expect(subscriberTuple).toBeDefined();
    if (!subscriberTuple) return;
    const subscriberClass = subscriberTuple[0];
    const metadata = subscriberTuple[1];
    const subscriber = new subscriberClass();
    expect(() =>
      subscriber.handleMessage(generateMockMessage({ subscriber: metadata })),
    ).not.toThrow();
    expect(JSON.stringify(subscriptions)).toContain(
      'test.auto-load-subscription',
    );
  });
});
