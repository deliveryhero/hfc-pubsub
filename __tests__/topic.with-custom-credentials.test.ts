import { PubSubService } from '@honestfoodcompany/pubsub';
import GooglePubSubAdapter from '../src/client/googlePubSub';
import TestTopicWithProjectCredentials from './pubsub/topics/test-topic.with-custom-credentials';

process.env.PUBSUB_DRIVER = 'google';

const mockPublish = jest.fn();

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
        topic: jest.fn((topicName) => ({
          get: jest.fn(() => {
            return new Promise((resolve) => {
              resolve([
                {
                  name: topicName,
                  publish: mockPublish,
                  publishJSON: mockPublish,
                },
              ]);
            });
          }),
        })),
      };
    }),
  };
});

describe('With Custom Credentials', (): void => {
  it('should call publish', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new TestTopicWithProjectCredentials();
    await topic.publish({ data: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call Google Driver publish method', async (): Promise<void> => {
    const spy = jest.spyOn(GooglePubSubAdapter.prototype, 'publish');
    const topic = new TestTopicWithProjectCredentials();
    await topic.publish({ data: 'test' });
    expect(spy).toHaveBeenCalled();
  });

  it('should call GooglePubSub publish method', async (): Promise<void> => {
    const topic = new TestTopicWithProjectCredentials();
    await topic.publish({ data: 'test' });
    expect(mockPublish).toHaveBeenCalled();
  });

  it('should have the project defined in projects', async () => {
    const topic = new TestTopicWithProjectCredentials();
    await topic.publish({ data: 'test' });
    expect(
      GooglePubSubAdapter.getInstance().projects['custom-project-id'],
    ).toBeDefined();
  });

  it('should retrieve the correct project when publishing the message', async () => {
    const topic = new TestTopicWithProjectCredentials();
    await topic.publish({ data: 'test' });
    expect(
      GooglePubSubAdapter.getInstance().projects['custom-project-id'],
    ).toBeDefined();
  });

  it('should call GooglePubSub with correct credentials', async () => {
    const topic = new TestTopicWithProjectCredentials();
    await topic.publish({ data: 'test' });
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
