require('dotenv').config({ path: require('find-config')('.env') });
import { PubSubService } from '../../index';
import chalk from 'chalk';
import { cli } from 'cli-ux';

export default {
  command: 'subscriptions',
  desc: 'Lists all subscriptions',
  handler: async (): Promise<void> => {
    console.log(chalk.white.bgBlue.bold('\n All Subscriptions'), '\n');
    const subscriptions = await PubSubService.getInstance().getAllSubscriptions();
    if (subscriptions.length == 0) {
      console.log(chalk.white.bold('\n No subscriptions found'));
    } else {
      cli.table(
        subscriptions,
        {
          'Topic Name': {
            get: (row): string => row.topicName || '',
          },
          'Subscription Name': {
            get: (row): string => row.subscriptionName,
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
