/* eslint-disable @typescript-eslint/explicit-function-return-type */
require('dotenv').config({ path: require('find-config')('.env') });
import PubSubService from '../src/service/pubsub';
import ExampleTopic from './pubsub/topics/example.topic';
import ExampleSubscriber from './pubsub/subscriptions/example.subscription-ts';
import GooglePubSubAdapter from '../src/driver/googlePubSub';

process.env.PUBSUB_DRIVER = 'google';

console.log = () => null;

const mockPublish = jest.fn();
const mockSubscribe = jest.fn();

jest.mock('../src/driver/googlePubSub', () => ({
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
  },
}));

let service: any;
let subscriber: any;
let topic: any;
describe('pubsub.service', () => {
  beforeAll(() => {
    service = new PubSubService();
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
});
