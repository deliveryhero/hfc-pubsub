import { PubSubService } from '@honestfoodcompany/pubsub';
import { SubscriberV2 as Subscriber } from '../src/subscriber';
import TestTopic from './pubsub/topics/test-topic';
import ExampleSubscriber from './pubsub/subscriptions/test-topic.example.subscription';

process.env.PUBSUB_DRIVER = 'synchronous';

console.log = () => null;

const mockPublish = jest.fn();
const mockSubscribe = jest.fn();

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn().mockImplementation(() => ({
    topic: jest.fn(),
    publish: jest.fn(),
  })),
}));

jest.mock('../src/client/eventBus', () => ({
  __esModule: true,
  default: class {
    public static getInstance() {
      return new this();
    }
    public publish() {
      return mockPublish();
    }
    public subscribe() {
      return mockSubscribe();
    }
    public async getAllSubscriptions() {
      throw new Error(
        'This feature is not available with the synchronous driver',
      );
    }
  },
}));

let service: any;
let subscriber: any;
let topic: any;
describe('pubsub.service - synchronous driver', () => {
  beforeAll(() => {
    service = PubSubService.getInstance();
    subscriber = new Subscriber(ExampleSubscriber);
    topic = new TestTopic();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle subscriptions', async () => {
    await service.subscribe(subscriber);
    expect(mockSubscribe.mock.calls.length).toBe(1);
  });

  it('should handle publishing', async () => {
    await service.publish(topic, subscriber);
    expect(mockPublish.mock.calls.length).toBe(1);
  });

  it('should throw if the synchronous driver is enabled for getAllSubscriptions', async () => {
    await expect(service.getAllSubscriptions()).rejects.toMatchObject({
      message: 'This feature is not available with the synchronous driver',
    });
  });
});
