import PubSubService from '../src/service/pubsub';
import TestTopic from './pubsub/topics/test-topic';
import TestTopicNoTimeStamp from './pubsub/topics/test-topic.no.timestamp';

const mockPublish = jest.fn().mockResolvedValue('testid');

jest.mock('../src/service/pubsub', () => ({
  __esModule: true,
  default: class {
    public static getInstance() {
      return new this();
    }
    public publish(): Promise<string> {
      return mockPublish();
    }
  },
}));

describe('topics', (): void => {
  const defaultRetrySettings = {
    retryConfig: {
      backoffSettings: {
        initialRetryDelayMillis: 100,
        initialRpcTimeoutMillis: 5000,
        maxRetryDelayMillis: 60000,
        maxRpcTimeoutMillis: 600000,
        retryDelayMultiplier: 1.3,
        rpcTimeoutMultiplier: 1,
        totalTimeoutMillis: 600000,
      },
      retryCodes: [10, 1, 4, 13, 8, 14, 2],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should publish to pubsub', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService, 'getInstance');
    const topic = new TestTopic();
    await topic.publish({ data: 'test' });
    expect(spy).toBeCalledTimes(1);
    expect(mockPublish).toBeCalledTimes(1);
  });

  it('Expect publish to return a string with the messageId', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService, 'getInstance');
    const topic = new TestTopic();
    const data = await topic.publish({ data: 'test' });
    expect(spy).toBeCalledTimes(1);
    expect(data).toBe('testid');
    expect(mockPublish).toBeCalledTimes(1);
  });

  it('Should test retry config to be the default one', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new TestTopic();
    const data = await topic.publish({ data: 'test' });
    expect(data).toBe('testid');
    expect(spy).toBeCalledWith(
      TestTopic,
      expect.objectContaining({
        _timestamp: expect.stringContaining(':'),
      }),
      expect.objectContaining({
        ...defaultRetrySettings,
      }),
    );
  });

  it('Should Not add timestamp', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new TestTopicNoTimeStamp();
    const data = await topic.publish({ data: 'test' });
    expect(data).toBe('testid');
    expect(spy).toBeCalledWith(
      TestTopicNoTimeStamp,
      expect.not.objectContaining({
        _timestamp: expect.stringContaining(':'),
      }),
      undefined,
    );
  });

  it('Should test retry config to be the updated retry config one', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new TestTopic();
    const data = await topic.publish(
      { data: 'test' },
      {
        retryConfig: {
          backoffSettings: { initialRetryDelayMillis: 500 },
        },
      },
    );
    expect(data).toBe('testid');
    expect(spy).toBeCalledWith(
      TestTopic,
      expect.any(Object),
      expect.objectContaining({
        retryConfig: {
          backoffSettings: {
            initialRetryDelayMillis: 500,
            initialRpcTimeoutMillis: 5000,
            maxRetryDelayMillis: 60000,
            maxRpcTimeoutMillis: 600000,
            retryDelayMultiplier: 1.3,
            rpcTimeoutMultiplier: 1,
            totalTimeoutMillis: 600000,
          },
          retryCodes: [10, 1, 4, 13, 8, 14, 2],
        },
      }),
    );
  });

  it('Should forward attributes to the publish method', async (): Promise<void> => {
    const spy = jest.spyOn(PubSubService.prototype, 'publish');
    const topic = new TestTopic();
    const data = await topic.publish(
      { data: 'test' },
      { attributes: { test: 'filter' } },
    );
    expect(data).toBe('testid');
    expect(spy).toBeCalledWith(
      TestTopic,
      expect.any(Object),
      expect.objectContaining({
        ...defaultRetrySettings,
        attributes: {
          test: 'filter',
        },
      }),
    );
  });
});
