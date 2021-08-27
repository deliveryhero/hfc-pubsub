#! /usr/local/bin/node
require('dotenv').config({ path: require('find-config')('.env') });
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
    'project-number': {
      describe: '(Optional) project number for the project',
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
  }).argv;
