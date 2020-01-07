#! /usr/local/bin/node
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config({ path: require('find-config')('.env') });
import commands from './commands';

require('yargs')
  .command(commands.start)
  .command(commands.list).argv;
