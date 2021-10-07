require('dotenv').config({ path: require('find-config')('.env') });
import chalk from 'chalk';
import Table from 'cli-table';
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
      Logger.Instance.warn(chalk.white.bold('\n No subscriptions found'));
    } else {
      const table = new Table({
        head: ['Topic Name', 'Subscription Name'],
      });
      table.push(
        ...PubSubService.getInstance()
          .getSubscribers()
          .map((row: any) => [row.topicName, row.subscriptionName]),
      );

      console.log(`${table.toString()}\n`);
    }
  },
};
