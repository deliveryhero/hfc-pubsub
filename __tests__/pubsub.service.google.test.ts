import { PubSubService } from '@honestfoodcompany/pubsub';
import TestTopic from './pubsub/topics/test-topic';
import ExampleSubscriber from './pubsub/subscriptions/test-topic.example.subscription';

process.env.PUBSUB_DRIVER = 'google';

console.log = () => null;

const mockPublish = jest.fn();
const mockSubscribe = jest.fn();
const mockClose = jest.fn();

const mockAllSubscriptionList = [
  {
    topicName: 'test-topic',
    subscriptionName: 'test-topic.example.subscription',
  },
];

jest.mock('../src/client/googlePubSub', () => ({
  __esModule: true,
  default: class {
    public static getInstance() {
      return new this();
    }
    public publish(...args: any[]) {
      return mockPublish(...args);
    }
    public subscribe(...args: any[]) {
      return mockSubscribe(...args);
    }
    public close() {
      return mockClose();
    }
    public async getAllSubscriptions() {
      return mockAllSubscriptionList;
    }
  },
}));

describe('pubsub.service', () => {
  let service: PubSubService;
  let subscriber: ReturnType<PubSubService['getSubscribers']>[number];

  beforeAll(() => {
    service = PubSubService.getInstance();
    subscriber = PubSubService.getInstance()
      .getSubscribers()
      .find(
        (sub) => sub[1].subscriptionName === ExampleSubscriber.subscriptionName,
      )!;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle subscriptions', async () => {
    await service.subscribe(subscriber);
    expect(mockSubscribe.mock.calls.length).toBe(1);
  });

  it('should handle publishing', async () => {
    await service.publish(TestTopic, { data: 1 });
    expect(mockPublish.mock.calls.length).toBe(1);
  });

  it('should handle publishing with attributes', async () => {
    await service.publish(
      TestTopic,
      { data: 1 },
      {
        attributes: {
          filter: 'test',
        },
      },
    );
    expect(mockPublish.mock.calls.length).toBe(1);
    expect(mockPublish.mock.calls[0][1]).toMatchObject({
      data: 1,
    });
    expect(mockPublish.mock.calls[0][2]).toMatchObject({
      attributes: {
        filter: 'test',
      },
    });
  });

  it('should return an array from getAllSubscriptions', async () => {
    const data = await service.getAllSubscriptions();
    expect(data).toBe(mockAllSubscriptionList);
  });

  it('should handle closeAll', async () => {
    await service.closeAll();
    expect(mockClose.mock.calls.length).toBe(
      (await service.getSubscribers()).length,
    );
  });
});
