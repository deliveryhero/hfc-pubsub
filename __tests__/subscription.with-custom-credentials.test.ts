import { PubSubService, SubscriptionService } from '@honestfoodcompany/pubsub';
import { SubscriberTuple } from '../src/subscriber';
import GooglePubSubAdapter from '../src/client/googlePubSub';
import { createProject } from '../src/client/googlePubSub/project';

process.env.PUBSUB_DRIVER = 'google';
jest.mock('../src/client/googlePubSub/project', () => {
  const actual = jest.requireActual('../src/client/googlePubSub/project');
  return {
    ...actual,
    createProject: jest.fn((...args) => {
      return actual.createProject(...args);
    }),
  };
});

const mockSubscribe = jest.fn();
const mockConstructor = jest.fn();
const mockClose = jest.fn();
const mockRemoveListeners = jest.fn();

const mockSubscription = jest.fn(() => ({
  exists: jest.fn(() => [true]),
  on: jest.fn(),
  close: mockClose,
  removeAllListeners: mockRemoveListeners,
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
        topic: jest.fn((topicName) => ({
          get: jest.fn(() => {
            return new Promise((resolve) => {
              resolve([
                {
                  name: topicName,
                  publish: jest.fn(),
                  getSubscriptions: jest.fn(() => ['dummySub']),
                },
              ]);
            });
          }),
        })),
      };
    }),
  };
});

jest.mock('@google-cloud/resource', () => {
  return {
    __esModule: true,
    Resource: jest.fn().mockImplementation(() => {
      return {
        project: jest.fn(() => ({
          get: jest.fn(() => Promise.resolve('dummyProjectNum')),
        })),
      };
    }),
  };
});

describe('With Project Credentials', (): void => {
  let subscriptions: SubscriberTuple[];
  let subscription: SubscriberTuple;

  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
    subscription = subscriptions.find((sub) => {
      const [, { subscriptionName }] = sub;
      return (
        subscriptionName ===
        'test-topic.example.with-custom-credentials.subscription'
      );
    }) as SubscriberTuple;
  });

  it('should call subscribe to the right project and cache subscription', async (): Promise<void> => {
    expect(subscription).toBeDefined();
    const subscribe = jest.spyOn(GooglePubSubAdapter.prototype, 'subscribe');
    // @ts-expect-error getProject is a private method
    const getProject = jest.spyOn(GooglePubSubAdapter.prototype, 'getProject');
    await PubSubService.getInstance().subscribe(subscription);

    expect(subscribe).toHaveBeenCalled();
    expect(getProject).toHaveBeenCalledWith(subscription[1].options);
    expect(jest.mocked(createProject).mock.calls[1]).toEqual([
      'google-pubsub-project-id',
      {
        credentials: {
          client_email: 'client email goes here',
          private_key: 'private key goes here',
        },
      },
    ]);
    expect(mockConstructor.mock.calls[1]).toEqual([
      {
        credentials: {
          client_email: 'client email goes here',
          private_key: 'private key goes here',
        },
        projectId: 'google-pubsub-project-id',
      },
    ]);
    expect(mockSubscription).toHaveBeenCalledTimes(1);
  });

  it('should close existing subscription and skip not subscribed topics', async (): Promise<void> => {
    await PubSubService.getInstance().closeAll();
    expect(mockSubscription).toHaveBeenCalledTimes(1);
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(mockRemoveListeners).toHaveBeenCalledTimes(1);
  });
});
