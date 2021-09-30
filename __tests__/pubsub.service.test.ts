import { PubSubService } from '@honestfoodcompany/pubsub';
import SubService from './pubsub/subscription.service';

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: jest.fn(),
}));

jest.mock('./pubsub/subscription.service', () => ({
  __esModule: true,
  default: {
    init: jest.fn().mockImplementation(() => {
      return this;
    }),
    closeAll: jest.fn(),
    getSubscribers: jest.fn().mockImplementation(() => []),
  },
}));

describe('@PubSub Service Init', () => {
  let originalCloseAll: () => Promise<void>;

  beforeAll(async () => {
    originalCloseAll = SubService.closeAll;
    await PubSubService.getInstance().startSubscriptions();
  });

  it('should call init', () => {
    expect(SubService.init).toBeCalled();
  });

  it('should override closeAll method', () => {
    expect(SubService.closeAll).not.toEqual(originalCloseAll);
  });
});
