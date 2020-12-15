require('dotenv').config({ path: require('find-config')('.env') });
import exampleTopicWithProjectCredentials from './pubsub/topics/example.topic_withProjectCredentials';
import GooglePubSubAdapter from '../src/client/googlePubSub';
import PubSubService from '../src/service/pubsub';

jest.mock('@google-cloud/pubsub');
jest.mock('google-gax');

jest.createMockFromModule('../src/client/googlePubSub');

//@ts-expect-error
const mockPubSubAdapter = new GooglePubSubAdapter();

GooglePubSubAdapter.getInstance = jest.fn(() => mockPubSubAdapter);

jest.createMockFromModule('../src/service/pubsub');

//@ts-expect-error
const mockPubSubService = new PubSubService();

PubSubService.getInstance = jest.fn(() => mockPubSubService);

//@ts-expect-error
PubSubService.client = mockPubSubAdapter;

describe('Topic and PubSubService', (): void => {
  beforeEach(() => {
    // jest.clearMocks();
  });
  it('should call PubSubService publish method ', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });

    expect(PubSubService.getInstance).toBeCalled();
    expect(spy).toBeCalled();
  });
  it('should get GooglePubSubAdapter', async (): Promise<void> => {
    const spy = jest.spyOn(mockPubSubService, 'getClient');
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(PubSubService.getInstance).toBeCalled();
    expect(spy).toBeCalled();
  });
  it('should call  GooglePubSubAdapter', async (): Promise<void> => {
    const spy = jest.spyOn(mockPubSubAdapter, 'publish');
    const topic = new exampleTopicWithProjectCredentials();
    await topic.publish<any>({ data: 'test' });
    expect(PubSubService.getInstance).toBeCalled();
    expect(spy).toBeCalled();
  });
});
