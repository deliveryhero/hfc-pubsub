import { SubscriptionService } from '@honestfoodcompany/pubsub';

const mockPubSub = jest.fn();

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: mockPubSub,
}));

const mockPublish = jest.fn();
jest.mock('../src/service/pubsub', () => ({
  __esModule: true,
  default: class {
    public static getInstance() {
      console.log('getting instance');
      return new this();
    }
    public publish() {
      return mockPublish();
    }
  },
}));

jest.mock('./pubsub/subscriptions/test-topic.example.subscription', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    getTopicName: () => {
      return 'test-topic';
    },
    setMongooseConnection: function () {
      return this;
    },
    init: function () {
      return this;
    },
    start: jest.fn(),
  })),
}));

describe('subscriptions cli', () => {
  it('should load subscription service', () => {
    const service = SubscriptionService.loadSubscriptionService();
    expect(typeof service).toBe('function');
  });
});
