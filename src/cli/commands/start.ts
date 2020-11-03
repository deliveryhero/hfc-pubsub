import { PubSubService } from '../../index';
import chalk from 'chalk';
import { cli } from 'cli-ux';
import TypescriptLoader from '../../service/typescriptLoader';

export default {
  command: 'start',
  desc:
    'Will listen to Google Pub/Sub topics and initialize their event handlers',
  handler: async (argv: any): Promise<void> => {
    argv;
    console.log(
      chalk.bold.blue('Starting Google Pub/Sub Subscriptions Server'),
    );
    if (TypescriptLoader.isTsIncluded()) {
      await TypescriptLoader.cleanCache();
      let tsconfigPath = await cli.prompt(
        'Enter your tsconfig file path or press enter for default',
        { required: false },
      );
      await TypescriptLoader.compileTs(tsconfigPath);
    }
    await PubSubService.getInstance().startSubscriptions();
  },
};
