import SubscriptionService from '../src/service/subscription';

const mockPubSub = jest.fn();

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: mockPubSub,
}));

const mockPublish = jest.fn();
jest.mock('../src/service/pubsub', (): any => ({
  __esModule: true,
  default: class {
    public static getInstance(): any {
      console.log('getting instance');
      return new this();
    }
    public publish(): any {
      return mockPublish();
    }
  },
}));

jest.mock('./pubsub/subscriptions/example.subscription', (): any => ({
  __esModule: true,
  default: jest.fn().mockImplementation((): any => ({
    getTopicName: (): any => {
      return 'test-topic';
    },
    setMongooseConnection: function (): any {
      return this;
    },
    init: function (): any {
      return this;
    },
    start: jest.fn(),
  })),
}));

describe('subscriptions cli', (): any => {
  it('should load subscription service', async (): Promise<any> => {
    const service = SubscriptionService.loadSubscriptionService();
    expect(typeof service).toBe('function');
  });
});
