#! /usr/local/bin/node
require('dotenv').config({ path: require('find-config')('.env') });
import { isatty } from 'tty';
import { Logger } from 'service/logger';
import type { Argv } from 'yargs';
import commands from './commands';

require('yargs')
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
  .fail(async function (msg: string, err: Error, yargs: Argv) {
    Logger.Instance.error({ err }, `Command failed. ${msg}`);
    if (isatty(process.stdout.fd)) {
      console.info(await yargs.getHelp());
    }
    process.exit(1);
  }).argv;
