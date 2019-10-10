const path = require('path');
const exec = require('child_process').exec;
import fs = require('fs');
import { PubSub } from "@google-cloud/pubsub";
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from "../src/subscription.service";
import exampleSubscription from './pubsub/subscriptions/example.subscription';
const replace = require('replace-in-file');

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
      exec(`node ${path.resolve('./dist/src/cli/subscriptions')} ${args.join(' ')}`,
      { cwd }, 
      (error, stdout, stderr) => { resolve({
      code: error && error.code ? error.code : 0,
      error,
      stdout,
      stderr })
    })
  })}
const inactiveSubscriptionsJson = path.resolve(process.env.PUBSUB_ROOT_DIR, '_subscriptions.json')
const activeSubscriptionsJson = inactiveSubscriptionsJson.replace('_subscriptions.json', 'subscriptions.json');

describe('subscriptions cli', () => {
  afterEach(() => {
    if (fs.existsSync(activeSubscriptionsJson)) {
     fs.renameSync(activeSubscriptionsJson, inactiveSubscriptionsJson); // set default incase it was changed in a test

      replace({
        files: inactiveSubscriptionsJson,
        from: /example\.subscription\.js/g,
        to: 'example.subscription',
      });
    }
  });

    it('should find config', async() => {
      if (!process.env.PUBSUB_ROOT_DIR.match(/__tests__/)) {
        console.log("to run tests, you must set your PUBSUB_ROOT_DIR .env variable to point to __tests__/pubsub");
        process.exit();
      }
    });

    it('should load subscriptions from subscriptions.json if it exists', async () => {

      if (fs.existsSync(inactiveSubscriptionsJson)) {
        fs.renameSync(inactiveSubscriptionsJson, activeSubscriptionsJson); // let's test subscriptions.json
        SubscriptionService.start();
        expect(exampleSubscription.mock.instances.length).toEqual(1);
      } else {
        expect(fs.existsSync(inactiveSubscriptionsJson)).toBe(true);
      }
    });


});