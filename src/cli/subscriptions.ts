#! /usr/local/bin/node
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config({ path: require('find-config')('.env') });
import commands from './commands';
import yargs from 'yargs';

yargs
  .command(commands.start)
  .command(commands.list)
  .options({
    tsConfig: {
      type: 'string',
      description: 'path to your tsConfig file',
      default: process.env.PUBSUB_TSCONFIG_PATH,
    },
  }).argv;
