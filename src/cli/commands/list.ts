import { PubSubService } from '../../index';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import wrapAnsi = require('wrap-ansi');
import { SubscriberTuple } from 'subscriber';
import TypescriptLoader from '../../service/typescriptLoader';
import { resolve } from 'path';

export default {
  command: 'list',
  desc: 'Lists all subscriptions',
  handler: async (args: { [key: string]: any }): Promise<void> => {
    console.log(
      chalk.white.bgBlue.bold('\n Google Pub/Sub Subscriptions'),
      '\n',
    );
    if (TypescriptLoader.isTsIncluded()) {
      await TypescriptLoader.cleanCache();
      await TypescriptLoader.compileTs(args.tsConfig);
    }
    if ((await PubSubService.getInstance().getSubscribers()).length == 0) {
      console.log(chalk.white.bold('\n No subscriptions found'));
    } else {
      cli.table(
        await PubSubService.getInstance().getSubscribers(),
        {
          'Topic Name': {
            get: (row: SubscriberTuple): string => row[1].topicName,
          },
          'Subscription Name': {
            get: (row: SubscriberTuple): string => row[1].subscriptionName,
          },
          Description: {
            get: (row: SubscriberTuple): string =>
              wrapAnsi(row[1].description || '', 100),
          },
        },
        {
          printLine: console.log,
        },
      );
      console.log('\n');
      process.exit(0);
    }
  },
};
