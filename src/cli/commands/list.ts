import chalk from 'chalk';
import { cli } from 'cli-ux';
import wrapAnsi = require('wrap-ansi');
import { Logger } from '../../service/logger';
import { PubSubService } from '../../index';
import { SubscriberTuple } from '../../subscriber';

export default {
  command: 'list',
  desc: 'Lists all subscriptions',
  handler: async (): Promise<void> => {
    Logger.Instance.info(
      chalk.white.bgBlue.bold('\n Google Pub/Sub Subscriptions'),
    );
    if (PubSubService.getInstance().getSubscribers().length == 0) {
      Logger.Instance.warn(chalk.white.bold('\n No subscriptions found'));
    } else {
      cli.table(
        PubSubService.getInstance().getSubscribers(),
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
