import chalk from 'chalk';
import { setEnvFromArgs } from '../env.setup';
import { Logger } from '../../service/logger';
import { PubSubService } from '../../index';

export default {
  command: 'start',
  desc: 'Will listen to Google Pub/Sub topics and initialize their event handlers',
  handler: async (_argv: unknown): Promise<void> => {
    setEnvFromArgs(_argv as any);
    Logger.Instance.info(
      chalk.bold.blue('Starting Google Pub/Sub Subscriptions Server'),
    );
    return PubSubService.getInstance().startSubscriptions();
  },
};
