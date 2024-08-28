import chalk from 'chalk';
import Table from 'cli-table';
import wrapAnsi from 'wrap-ansi';
import { Logger } from '../../service/logger';
import { PubSubService } from '../../index';
import { SubscriberTuple } from '../../subscriber';
import { setEnvFromArgs } from '../env.setup';

export default {
  command: 'list',
  desc: 'Lists all subscriptions',
  handler: async (_argv: unknown): Promise<void> => {
    setEnvFromArgs(_argv as any);
    Logger.Instance.info(
      chalk.white.bgBlue.bold('\n Google Pub/Sub Subscriptions'),
    );
    if (PubSubService.getInstance().getSubscribers().length == 0) {
      Logger.Instance.warn(chalk.white.bold('\n No subscriptions found'));
    } else {
      const table = new Table({
        head: ['Topic Name', 'Subscription Name', 'DLQ', 'Description'],
      });
      table.push(
        ...PubSubService.getInstance()
          .getSubscribers()
          .map((row: SubscriberTuple) => [
            row[1].topicName,
            row[1].subscriptionName,
            row[1].options?.deadLetterPolicy?.deadLetterTopic ?? 'N/A',
            wrapAnsi(row[1].description || '', 100),
          ]),
      );

      console.log(`${table.toString()}\n`);
      process.exit(0);
    }
  },
};
