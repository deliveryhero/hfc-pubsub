import { PubSubService } from '../../index';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import wrapAnsi = require('wrap-ansi');
import { SubscriberTuple } from 'subscriber';
import TypescriptLoader from '../../service/typescriptLoader';

export default {
  command: 'list',
  desc: 'Lists all subscriptions',
  handler: async (): Promise<void> => {
    console.log(
      chalk.white.bgBlue.bold('\n Google Pub/Sub Subscriptions'),
      '\n',
    );
    if (TypescriptLoader.isTsIncluded()) {
      await TypescriptLoader.cleanCache();
      let tsconfigPath = await cli.prompt(
        'Enter your tsconfig file path or press enter for default',
        );
        await TypescriptLoader.compileTs(tsconfigPath);
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
