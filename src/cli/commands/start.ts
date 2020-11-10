import { PubSubService } from '../../index';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import TypescriptLoader from '../../service/typescriptLoader';
import { resolve } from 'path';

export default {
  command: 'start',
  desc:
    'Will listen to Google Pub/Sub topics and initialize their event handlers',
  handler: async (argv: any): Promise<void> => {
    console.log(
      chalk.bold.blue('Starting Google Pub/Sub Subscriptions Server'),
    );
    if (TypescriptLoader.isTsIncluded()) {
      try {
        await TypescriptLoader.cleanCache();
        await TypescriptLoader.compileTs(argv.tsConfig);
      } catch (error) {
        throw error
      }
    }
    await PubSubService.getInstance().startSubscriptions();
  },
};
