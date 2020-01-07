const path = require('path');
const exec = require('child_process').exec;
import fs from 'fs';
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from '../src/service/subscription';

const mockPubSub = jest.fn();

process.env.PUBSUB_ROOT_DIR = path.resolve(__dirname, 'pubsub');

console.log(process.env.PUBSUB_ROOT_DIR);
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
    setMongooseConnection: function(): any {
      return this;
    },
    init: function(): any {
      return this;
    },
    start: jest.fn(),
  })),
}));

function cli(args: any, cwd: string | null = null): any {
  return new Promise((resolve): any => {
    exec(
      `node ${path.resolve('./dist/cli/subscriptions')} ${args.join(' ')}`,
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
beforeAll((): any => {
  if (
    fs.existsSync(path.resolve(__dirname, 'pubsub/_subscription.service.js'))
  ) {
    fs.renameSync(
      path.resolve(__dirname, 'pubsub/_subscription.service.js'),
      path.resolve(__dirname, 'pubsub/subscription.service.js'),
    ); // let's test subscription service
  }
});
afterAll((): any => {
  if (
    fs.existsSync(path.resolve(__dirname, 'pubsub/subscription.service.js'))
  ) {
    fs.renameSync(
      path.resolve(__dirname, 'pubsub/subscription.service.js'),
      path.resolve(__dirname, 'pubsub/_subscription.service.js'),
    ); // let's test subscription service
  }
});
describe('subscriptions cli', (): any => {
  it('should load subscription service', async (): Promise<any> => {
    const service = SubscriptionService.loadSubscriptionService();
    expect(typeof service).toBe('function');
  });
});
