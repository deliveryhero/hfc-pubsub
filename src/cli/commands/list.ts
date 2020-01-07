import { PubSubService } from '../../index';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import wrapAnsi = require('wrap-ansi');

export default {
  command: 'list',
  desc: 'Lists all subscriptions',
  handler: async (): Promise<void> => {
    console.log(
      chalk.white.bgBlue.bold(
        '\n Subscriptions registered in SubscriptionService ',
      ),
      '\n',
    );
    if (PubSubService.getInstance().getSubscribers().length == 0) {
      console.log(chalk.white.bold('\n No subscriptions found'));
    } else {
      cli.table(
        PubSubService.getInstance().getSubscribers(),
        {
          'Topic Name': {
            get: (row): string => row.topicName,
          },
          'Subscription Name': {
            get: (row): string => row.subscriptionName,
          },
          Description: {
            get: (row): string => wrapAnsi(row.description, 100),
          },
        },
        {
          printLine: console.log,
        },
      );
      console.log('\n');
    }
  },
};
