import chalk from 'chalk';
import { PubSubService } from '../../index';

export default {
  command: 'start',
  desc: 'Will listen to Google Pub/Sub topics and initialize their event handlers',
  handler: async (_argv: unknown): Promise<void> => {
    console.log(
      chalk.bold.blue('Starting Google Pub/Sub Subscriptions Server'),
    );
    return PubSubService.getInstance().startSubscriptions();
  },
};
