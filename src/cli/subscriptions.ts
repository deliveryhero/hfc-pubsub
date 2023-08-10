#! /usr/local/bin/node
require('dotenv').config({ path: require('find-config')('.env') });
import { isatty } from 'tty';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Logger } from '../service/logger';
import commands from './commands';

const parser = yargs(hideBin(process.argv))
  .command(commands.start)
  .command(commands.list)
  .options({
    'project-id': {
      describe: 'Google project id',
      type: 'string',
    },
    'root-dir': {
      describe: 'Path where pubsub folder resides',
      type: 'string',
    },
    driver: {
      describe: 'Use value synchronous or leave it to default async',
      type: 'string',
    },
    'google-application-credentials': {
      describe: 'Path to exported credentials file',
      type: 'string',
    },
    'server-port': {
      describe: 'Port at which server would run default 8080',
      type: 'string',
    },
    'health-server': {
      describe: 'If true runs server telling health state of subscriptions',
      type: 'string',
    },
  })
  .showHelpOnFail(false)
  .fail(false);

async function main() {
  await parser.parse();
}

if (require.main === module) {
  main().catch(async (err) => {
    Logger.Instance.error({ err }, `Command failed`);
    if (isatty(process.stdout.fd)) {
      console.info(await yargs.getHelp());
    }
    process.exit(1);
  });
}
