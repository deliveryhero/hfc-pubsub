const path = require('path');
const exec = require('child_process').exec;
import fs = require('fs');
import { PubSub } from '@google-cloud/pubsub';
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from '../src/service/subscription';
import exampleSubscription from './pubsub/subscriptions/example.json.subscription';
const replace = require('replace-in-file');

jest.mock('@google-cloud/pubsub', (): any => ({
  __esModule: true,
  PubSub: jest.fn(),
}));

function cli(args: any, cwd: any = null): any {
  return new Promise((resolve): any => {
    exec(
      `node ${path.resolve('./dist/src/cli/subscriptions')} ${args.join(' ')}`,
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
const inactiveSubscriptionsJson = path.resolve(
  process.env.PUBSUB_ROOT_DIR,
  '_subscriptions.json',
);
const activeSubscriptionsJson = inactiveSubscriptionsJson.replace(
  '_subscriptions.json',
  'subscriptions.json',
);

describe('subscriptions cli', (): any => {
  afterEach((): any => {
    if (fs.existsSync(activeSubscriptionsJson)) {
      fs.renameSync(activeSubscriptionsJson, inactiveSubscriptionsJson); // set default incase it was changed in a test

      replace({
        files: inactiveSubscriptionsJson,
        from: /example\.subscription\.js/g,
        to: 'example.subscription',
      });
    }
  });

  it('should load subscriptions from subscriptions.json if it exists', (): any => {
    if (fs.existsSync(inactiveSubscriptionsJson)) {
      fs.renameSync(inactiveSubscriptionsJson, activeSubscriptionsJson); // let's test subscriptions.json
      const subscribers = SubscriptionService.getSubscribers();
      expect(subscribers[0].topicName).toEqual('test-json-topic');
    } else {
      expect(fs.existsSync(inactiveSubscriptionsJson)).toBe(true);
    }
  });
});
