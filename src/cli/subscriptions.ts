#! /usr/local/bin/node
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config({ path: require('find-config')('.env') });
import commands from './commands';
import yargs from 'yargs';

yargs
  .command(commands.start)
  .command(commands.list)
  .options({
    tsConfig: { type: 'string', default: process.env.PUBSUB_TSCONFIG_PATH },
  }).argv;
