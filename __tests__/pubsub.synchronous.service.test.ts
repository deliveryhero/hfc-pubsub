/* eslint-disable @typescript-eslint/explicit-function-return-type */
require('dotenv').config({ path: require('find-config')('.env') });
import PubSubService from '../src/service/pubsub';
import ExampleTopic from './pubsub/topics/example.topic';
import ExampleSubscriber from './pubsub/subscriptions/example.subscription-ts';

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

jest.mock('../src/driver/eventBus', () => ({
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
    public async getAllSubscriptions(): Promise<any> {
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
    await service.publish(topic, subscriber);
    expect(mockPublish.mock.calls.length).toBe(1);
  });
  it('should throw if the synchronous driver is enabled for getAllSubscriptions', async done => {
    try {
      await service.getAllSubscriptions();
    } catch (err) {
      expect(err.message).toBe(
        'This feature is not available with the synchronous driver',
      );
    }
    done();
  });
});
