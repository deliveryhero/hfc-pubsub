require('dotenv').config({ path: require('find-config')('.env') });
import chalk from 'chalk';
import { cli } from 'cli-ux';
import { Logger } from '../../service/logger';
import { PubSubService } from '../../index';

export default {
  command: 'subscriptions',
  desc: 'Lists all subscriptions',
  handler: async (): Promise<void> => {
    Logger.Instance.info(chalk.white.bgBlue.bold('\n All Subscriptions'), '\n');
    const subscriptions =
      await PubSubService.getInstance().getAllSubscriptions();
    if (subscriptions.length == 0) {
      Logger.Instance.info(chalk.white.bold('\n No subscriptions found'));
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
          printLine: Logger.Instance.info,
        },
      );
      Logger.Instance.info('\n');
    }
  },
};
