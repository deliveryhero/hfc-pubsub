import PubSub from '../src/service/pubsub';
import MockSubService from './pubsub/subscription.service';

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn(),
}));

jest.mock('./pubsub/subscription.service', (): any => ({
  __esModule: true,
  default: {
    init: jest.fn().mockImplementation(() => {
      return this;
    }),
    getSubscribers: jest.fn().mockImplementation(() => []),
  },
}));

describe('subscriptions init', () => {
  let originalCloseAll: () => Promise<void>;
  beforeAll(async () => {
    originalCloseAll = MockSubService.closeAll;
    await PubSub.getInstance().startSubscriptions();
  });
  it('should call init', () => {
    expect(MockSubService.init).toBeCalled();
  });

  it('should override closeAll method', () => {
    expect(MockSubService.closeAll).not.toEqual(originalCloseAll);
  });
});
