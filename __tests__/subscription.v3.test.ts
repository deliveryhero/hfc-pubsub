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

describe('subscription v2 test', (): any => {
  let subscriptions: Subscribers;
  beforeAll(() => {
    subscriptions = SubscriptionService.getSubscribers();
  });
  it('should list subscriptions', async (): Promise<any> => {
    expect(JSON.stringify(subscriptions)).toContain(
      'test.v3.topic.subscription',
    );
    console.log(JSON.stringify(subscriptions, null, 2));
  });
});
