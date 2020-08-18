import { PubSubService } from '../../index';
import chalk from 'chalk';

export default {
  command: 'start',
  desc:
    'Will listen to Google Pub/Sub topics and initialize their event handlers',
  handler: async (argv: any): Promise<void> => {
    argv;
    console.log(
      chalk.bold.blue('Starting Google Pub/Sub Subscriptions Server'),
    );
    PubSubService.getInstance().startSubscriptions();
  },
};
