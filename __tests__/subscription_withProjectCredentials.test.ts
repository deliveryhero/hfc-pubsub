import PubSubService from '../src/service/pubsub';
import { Subscribers, SubscriberTuple } from '../src/subscriber';
import { SubscriptionService } from '../src';
import GooglePubSubAdapter from '../src/client/googlePubSub';

process.env.PUBSUB_DRIVER = 'google';

const mockPublish = jest.fn();
const mockSubscribe = jest.fn();
const mockGet = jest.fn(() => {
  return new Promise((resolve) => {
    resolve([
      {
        publish: mockPublish,
      },
    ]);
  });
});

const mockConstructor = jest.fn();

const mockSubscription = jest.fn(() => ({
  exists: jest.fn(() => [true]),
  on: jest.fn(),
  close: jest.fn(),
  setMetadata: jest.fn(),
}));

jest.mock('@google-cloud/pubsub', () => {
  return {
    __esModule: true,
    PubSub: jest.fn().mockImplementation((config) => {
      mockConstructor(config);
      return {
        subscription: mockSubscription,
        subscribe: mockSubscribe(config),
        topic: jest.fn(() => ({
          get: mockGet,
        })),
      };
    }),
  };
});

jest.mock('grpc', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});
jest.mock('google-gax');

describe('Google Pub Sub', (): void => {
  let subscriptions: Subscribers;
  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
  });

  it('should call subscribe to the right project and cache subscription', async (): Promise<void> => {
    const subscription = subscriptions.find((sub) => {
      const [, { subscriptionName }] = sub;
      return subscriptionName === 'test.v3_withProjectCredentials';
    }) as SubscriberTuple;
    expect(subscription).toBeDefined();

    const subscribe = jest.spyOn(GooglePubSubAdapter.prototype, 'subscribe');
    const getProject = jest.spyOn(GooglePubSubAdapter.prototype, 'getProject');
    const createClient = jest.spyOn(GooglePubSubAdapter, 'createClient');
    await PubSubService.getInstance().subscribe(subscription);
    expect(subscribe).toBeCalled();
    expect(getProject).toBeCalledWith(subscription[1].options);
    expect(createClient.mock.calls[1]).toEqual([
      'google-pubsub-project-id',
      {
        credentials: {
          client_email: 'client email goes here',
          private_key: 'private key goes here',
        },
        grpc: false,
      },
    ]);
    expect(mockConstructor.mock.calls[1]).toEqual([
      {
        credentials: {
          client_email: 'client email goes here',
          private_key: 'private key goes here',
        },
        grpc: undefined,
        projectId: 'google-pubsub-project-id',
      },
    ]);
    expect(mockSubscription).toBeCalledTimes(1);
  });
});
