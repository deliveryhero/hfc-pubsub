/* eslint-disable @typescript-eslint/explicit-function-return-type */
require('dotenv').config({ path: require('find-config')('.env') });
import PubSubService from '../src/service/pubsub';
import ExampleTopic from './pubsub/topics/example.topic';
import ExampleSubscriber from './pubsub/subscriptions/example.subscription-ts';

process.env.PUBSUB_DRIVER = 'google';

console.log = () => null;

const mockPublish = jest.fn();
const mockSubscribe = jest.fn();

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
    public async getAllSubscriptions(): Promise<any[]> {
      return mockAllUsersList;
    }
  },
}));

let service: any;
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
    await service.publish(topic, subscriber);
    expect(mockPublish.mock.calls.length).toBe(1);
  });
  it('should return an array from getAllSubscriptions', async done => {
    const data = await service.getAllSubscriptions();
    expect(data).toBe(mockAllUsersList);
    done();
  });
});
