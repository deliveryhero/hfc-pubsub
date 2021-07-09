import PubSubService from '../src/service/pubsub';
import { RetryConfig } from '../src/interface';
import ExampleTopic from './pubsub/topics/example.topic';
import ExampleSubscriber from './pubsub/subscriptions/example.subscription-ts';

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
    public publish(...args: any[]): any {
      return mockPublish(...args);
    }
    public subscribe(...args: any[]): any {
      return mockSubscribe(...args);
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
  const retryConfig = {} as RetryConfig;
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
    await service.publish<ExampleTopic, { data: number; _timestamp: string }>(
      topic,
      { data: 1, _timestamp: 'test' },
      retryConfig,
    );
    expect(mockPublish.mock.calls.length).toBe(1);
  });

  it.only('should handle publishing with attributes', async () => {
    await service.publish<ExampleTopic, { data: number; _timestamp: string }>(
      topic,
      { data: 1, _timestamp: 'test' },
      {
        ...retryConfig,
        attributes: {
          filter: 'test',
        },
      },
    );
    expect(mockPublish.mock.calls.length).toBe(1);
    expect(mockPublish.mock.calls[0][1]).toMatchObject({
      data: 1,
      _timestamp: 'test',
    });
    expect(mockPublish.mock.calls[0][2]).toMatchObject({
      attributes: {
        filter: 'test',
      },
    });
  });

  it('should return an array from getAllSubscriptions', async (done) => {
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
