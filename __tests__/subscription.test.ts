import { Subscribers } from '../src/subscriber';
import SubscriptionService from '../src/service/subscription';

const mockPubSub = jest.fn();

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

describe('@subscription', (): any => {
  let subscriptions: Subscribers;
  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
  });

  it('should find subscription', async (): Promise<any> => {
    expect(JSON.stringify(subscriptions)).toContain(
      'test-topic.example.subscription',
    );
  });

  it('should have default options when not specified', () => {
    const subscription = subscriptions.find((sub) => {
      const [, { subscriptionName }] = sub;
      return subscriptionName === 'test-topic.example.subscription';
    });

    const subscriptionObj = subscription?.length
      ? subscription[1]
      : ({} as any);

    expect(subscriptionObj?.options?.ackDeadline).toBe(145);
    expect(subscriptionObj?.options?.flowControl?.maxMessages).toBe(134);
  });

  it('should allow the default values to be overridden', () => {
    const subscription = subscriptions.find((sub) => {
      const [, { subscriptionName }] = sub;
      return (
        subscriptionName === 'test-topic.example.override-options.subscription'
      );
    });

    const subscriptionObj =
      subscription && subscription.length > 1 ? subscription[1] : ({} as any);
    expect(subscriptionObj?.options?.ackDeadline).toBe(20);
    expect(subscriptionObj?.options?.flowControl?.maxMessages).toBe(40);
  });
});
