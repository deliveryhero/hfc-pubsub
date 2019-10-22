#! /usr/local/bin/node
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from "../subscription.service"; 
import { cli } from "cli-ux";
import chalk from "chalk";
import wrapAnsi = require("wrap-ansi");
import { Subscription } from "index";

require("yargs")
  .command(
    "start",
    "Will listen to Google Pub/Sub topics and initialize their event handlers",
    (yargs: any): void => {
      yargs;
    },
    async (argv: any): Promise<void> => {
      argv;
      console.log(chalk.bold.blue("Starting HFC Subscriptions Server"));
      SubscriptionService.start();
    },
  )
  .command(
    "list",
    "Lists all subscriptions",
    (yargs: any): void => {
      yargs;
    },
    (argv: any): void => {
      argv;
      console.log(
        chalk.white.bgBlue.bold(
          "\n Subscriptions registered in SubscriptionService ",
        ),
        "\n",
      );
      SubscriptionService.getSubscriptions();
      if (SubscriptionService.getSubscriptions().length == 0) {
        console.log(chalk.white.bold("\n No subscriptions found"));
      } else {
        cli.table(
          SubscriptionService.getSubscriptions() as Subscription[],
          {
            "Topic Name": {
              get: (row): string => row.getTopicName(),
            },
            "Subscription Name": {
              get: (row): string => row.getSubscriptionName(),
            },
            Description: {
              get: (row): string => wrapAnsi(row.getDescription(), 100),
            },
          },
          {
            printLine: console.log,
          },
        );
        console.log("\n");
      }
    },
  ).argv;