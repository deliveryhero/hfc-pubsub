const path = require('path');
const exec = require('child_process').exec;
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from "../src/subscription.service";
import exampleSubscription from './pubsub/subscriptions/example.subscription';

const mockPubSub = jest.fn();

jest.mock('@google-cloud/pubsub', () => ({
  __esModule: true,
  PubSub: mockPubSub,
}));

jest.mock('./pubsub/subscriptions/example.subscription', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    getTopicName: () => {
      return 'test-topic';
    },
    setMongooseConnection: (mongoose) => {
      return this;
    },
    init: () => {
      return this;
    },
    start: jest.fn(),
  })),
}));


function cli(args, cwd=null) {
    return new Promise(resolve => { 
      exec(`node ${path.resolve('./dist/cli/subscriptions')} ${args.join(' ')}`,
      { cwd }, 
      (error, stdout, stderr) => { resolve({
      code: error && error.code ? error.code : 0,
      error,
      stdout,
      stderr })
    })
  })}

describe('subscriptions cli', () => {
    it('should find config', async() => {
      if (!process.env.PUBSUB_ROOT_DIR.match(/__tests__/)) {
        console.log("to run tests, you must set your PUBSUB_ROOT_DIR .env variable to point to __tests__/pubsub");
        process.exit();
      }
    });

    it('should list subscriptions', async () => {
      let result = await cli(['list']);
      expect(JSON.stringify(result)).toContain('test-topic');
      const subscriptions = SubscriptionService.getSubscriptions();
      expect(subscriptions.length).toEqual(1);
    });

    it('should start subscriptions', async () => {
      SubscriptionService.start();
      expect(exampleSubscription.mock.instances.length).toEqual(1);
    });
});