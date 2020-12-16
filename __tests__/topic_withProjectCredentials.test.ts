/* eslint-disable @typescript-eslint/camelcase */
require('dotenv').config({ path: require('find-config')('.env') });
import exampleTopicWithProjectCredentials from './pubsub/topics/example.topic_withProjectCredentials';
import GooglePubSubAdapter from '../src/client/googlePubSub';
import PubSubService from '../src/service/pubsub';

process.env.PUBSUB_DRIVER = 'google';

const mockPublish = jest.fn();
const mockGet = jest.fn(() => {
  return new Promise(resolve => {
    resolve([
      {
        publish: mockPublish,
      },
    ]);
  });
});

const mockConstructor = jest.fn();
jest.mock('@google-cloud/pubsub', () => {
  return {
    __esModule: true,
    PubSub: jest.fn().mockImplementation(config => {
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

jest.mock('grpc', () => {
  return {
    __esModule: true,
    default: jest.fn(),
  };
});
jest.mock('google-gax');

describe('PubSubService', (): void => {
  beforeEach(() => {
    // jest.clearMocks();
  });

  it('should call publish', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(spy).toBeCalled();
  });
});

describe('GooglePubSubAdapter', () => {
  it('should call publish method', async (): Promise<void> => {
    const spy = jest.spyOn(GooglePubSubAdapter.prototype, 'publish');
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(spy).toBeCalled();
  });

  it('should call GooglePubSub publish method', async (): Promise<void> => {
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(mockPublish).toBeCalled();
  });

  it('should have the project defined in projects ', async () => {
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(
      GooglePubSubAdapter.getInstance().getProjects()['custom-project-id'],
    ).toBeDefined();
  });

  it('should retrieve the correct project when publishing the message ', async () => {
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(
      GooglePubSubAdapter.getInstance().getProjects()['custom-project-id'],
    ).toBeDefined();
  });
});

describe('Google PubSub Client', () => {
  it('should be called with correct credentials', async () => {
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(mockConstructor.mock.calls[1]).toEqual([
      {
        credentials: {
          client_email: 'client@google-auth.google.com',
          private_key: 'private_key_goes_here',
        },
        grpc: undefined,
        projectId: 'custom-project-id',
      },
    ]);
  });
});
