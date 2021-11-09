import { exec } from 'child_process';
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
const subscriptions = SubscriptionService.getSubscribers();
const findSubscriber = (name: string) => {
  const [, subscription] = subscriptions.find(
    ([, metadata]) => metadata.subscriptionName === name,
  ) || [, {} as any];
  return subscription;
};

function cli(args: any, cwd: string | undefined = undefined): any {
  return new Promise((resolve): any => {
    exec(
      `yarn run subscriptions ${args.join(' ')}`,
      { cwd },
      (error: any, stdout: any, stderr: any): any => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr,
        });
      },
    );
  });
}

jest.setTimeout(10000);

describe('subscriptions cli', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should find config', () => {
    if (
      process.env.PUBSUB_ROOT_DIR &&
      !process.env.PUBSUB_ROOT_DIR.match(/__tests__/)
    ) {
      console.log(
        'to run tests, you must set your PUBSUB_ROOT_DIR .env variable to point to __tests__/pubsub',
      );
      process.exit(1);
    }
    // Removes error no assertion
    expect(1).toBe(1);
  });

  it('should list subscriptions', async (): Promise<void> => {
    const result = await cli(['list']);
    expect(JSON.stringify(result)).toContain('test-topic.example.subscription');
    expect(JSON.stringify(result)).toContain(
      'test-topic.example.auto-load.subscription',
    );
    expect(JSON.stringify(result)).toContain(
      'test-topic.example.with-custom-credentials.subscription',
    );
  });

  it('should list all subscriptions', () => {
    const subscriptions = SubscriptionService.getSubscribers();
    expect(subscriptions.length).toEqual(6);
  });

  it('should use project level default options', () => {
    const subscriber = findSubscriber(
      'test-topic.example.override-options.subscription',
    );
    expect(subscriber.options.deadLetterPolicy).toEqual({
      deadLetterTopic: 'global.deadletter',
      maxDeliveryAttempts: 15,
    });
  });

  it('should use subscriber level default options over project level options', async (): Promise<any> => {
    const subscriber = findSubscriber(
      'test-topic.example.override-options-with-deadletter.subscription',
    );

    expect(subscriber.options.deadLetterPolicy).toEqual({
      deadLetterTopic:
        'test-topic.example.override-options-with-deadletter.subscription.dlq',
      maxDeliveryAttempts: 14,
    });
  });
});
