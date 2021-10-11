import { PubSubService } from '@honestfoodcompany/pubsub';
import GooglePubSubAdapter from '../src/client/googlePubSub';
import ExampleTopicWithProjectCredentials from './pubsub/topics/example.topic.with-custom-credentials';

process.env.PUBSUB_DRIVER = 'google';

const mockPublish = jest.fn();
const mockGet = jest.fn(() => {
  return new Promise((resolve) => {
    resolve([
      {
        publish: mockPublish,
        publishJSON: mockPublish,
      },
    ]);
  });
});

const mockConstructor = jest.fn();
jest.mock('@google-cloud/pubsub', () => {
  return {
    __esModule: true,
    PubSub: jest.fn().mockImplementation((config) => {
      mockConstructor(config);
      return {
        config: config,
        subscription: jest.fn(() => ({
          exists: jest.fn(() => true),
        })),
        subscribe: jest.fn(),
        topic: jest.fn(() => ({
          get: mockGet,
        })),
      };
    }),
  };
});

describe('With Custom Credentials', (): void => {
  it('should call publish', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new ExampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(spy).toBeCalled();
  });

  it('should call Google Driver publish method', async (): Promise<void> => {
    const spy = jest.spyOn(GooglePubSubAdapter.prototype, 'publish');
    const topic = new ExampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(spy).toBeCalled();
  });

  it('should call GooglePubSub publish method', async (): Promise<void> => {
    const topic = new ExampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(mockPublish).toBeCalled();
  });

  it('should have the project defined in projects', async () => {
    const topic = new ExampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(
      GooglePubSubAdapter.getInstance().projects['custom-project-id'],
    ).toBeDefined();
  });

  it('should retrieve the correct project when publishing the message', async () => {
    const topic = new ExampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(
      GooglePubSubAdapter.getInstance().projects['custom-project-id'],
    ).toBeDefined();
  });

  it('should call GooglePubSub with correct credentials', async () => {
    const topic = new ExampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(mockConstructor.mock.calls[1]).toEqual([
      {
        credentials: {
          client_email: 'client@google-auth.google.com',
          private_key: 'private_key_goes_here',
        },
        projectId: 'custom-project-id',
      },
    ]);
  });
});
