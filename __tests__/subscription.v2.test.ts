const path = require('path');
const exec = require('child_process').exec;
import fs from 'fs';
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from '../src/service/subscription';
import { Subscribers } from '../src/subscriber';

const mockPubSub = jest.fn();

process.env.PUBSUB_ROOT_DIR = path.resolve(__dirname, 'pubsub');

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

describe.only('subscription v2 test', (): any => {
  let subscriptions: Subscribers;
  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
  });
  it('should list subscriptions', async (): Promise<any> => {
    expect(JSON.stringify(subscriptions)).toContain(
      'test-topic.v2-subscription',
    );
  });

  it('should have default options when not specified (v2)', () => {
    const subscription = subscriptions.find(sub => {
      const [, { subscriptionName }] = sub;
      return subscriptionName === 'test-topic.v2-subscription';
    });

    const subscriptionObj =
      subscription && subscription.length > 1
        ? subscription[1]
        : {
            options: {
              ackDeadline: 1,
              flowControl: { maxMessages: 10 },
            },
          };
    expect(subscriptionObj?.options?.ackDeadline).toBe(30);
    expect(subscriptionObj?.options?.flowControl?.maxMessages).toBe(5);
  });
  it('test retry config is present', () => {
    const subscription = subscriptions.find(sub => {
      const [, { subscriptionName }] = sub;
      return subscriptionName === 'example.v2_retryConfig.options.subscription';
    });
    const subscriptionObj =
      subscription?.[0] && subscription?.length > 1
        ? subscription[1]
        : ({} as any);
    expect(subscriptionObj?.options?.retryPolicy?.maximumBackoff?.seconds).toBe(
      100,
    );
  });

  it('should allow the default values to be overridden (v2)', () => {
    const subscription = subscriptions.find(sub => {
      const [, { subscriptionName }] = sub;
      return subscriptionName === 'example.v2_override.options.subscription';
    });

    const subscriptionObj =
      subscription && subscription.length > 1
        ? subscription[1]
        : {
            options: {
              ackDeadline: 1,
              flowControl: { maxMessages: 10 },
            },
          };
    expect(subscriptionObj?.options?.ackDeadline).toBe(20);
    expect(subscriptionObj?.options?.flowControl?.maxMessages).toBe(40);
  });
});
