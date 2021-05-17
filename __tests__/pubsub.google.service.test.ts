import PubSubService from '../src/service/pubsub';
import ExampleTopic from './pubsub/topics/example.topic';
import ExampleSubscriber from './pubsub/subscriptions/example.subscription-ts';
import { RetryConfig } from '../src/interface';

process.env.PUBSUB_DRIVER = 'google';

console.log = () => null;

const mockPublish = jest.fn();
const mockSubscribe = jest.fn();
const mockClose = jest.fn();

const mockAllUsersList = [
  { topicName: 'test.topic', subscriptionName: 'test.subscription' },
];

jest.mock('../src/client/googlePubSub', () => ({
  __esModule: true,
  default: class {
    public static getInstance(): any {
      return new this();
    }
    public publish(): any {
      return mockPublish();
    }
    public subscribe(): any {
      return mockSubscribe();
    }
    public close(): any {
      return mockClose();
    }
    public async getAllSubscriptions(): Promise<any[]> {
      return mockAllUsersList;
    }
  },
}));

let service: PubSubService;
let subscriber: any;
let topic: any;

describe('pubsub.service', () => {
  beforeAll(() => {
    service = PubSubService.getInstance();
    subscriber = new ExampleSubscriber();
    topic = new ExampleTopic();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle subscriptions', async () => {
    await service.subscribe(subscriber);
    expect(mockSubscribe.mock.calls.length).toBe(1);
  });

  it('should handle publishing', async () => {
    await service.publish(topic, subscriber, {} as RetryConfig);
    expect(mockPublish.mock.calls.length).toBe(1);
  });

  it('should return an array from getAllSubscriptions', async done => {
    const data = await service.getAllSubscriptions();
    expect(data).toBe(mockAllUsersList);
    done();
  });

  it('should handle closeAll', async () => {
    await service.closeAll();
    expect(mockClose.mock.calls.length).toBe(
      (await service.getSubscribers()).length,
    );
  });
});
