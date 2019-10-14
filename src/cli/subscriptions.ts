#! /usr/local/bin/node
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config({ path: require('find-config')('.env') });
import SubscriptionService from "../subscription.service"; 
import { connect } from "mongoose";
import { cli } from "cli-ux";
import chalk from "chalk";
import wrapAnsi = require("wrap-ansi");

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
      const mongoURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
      if (!mongoURI) {
        SubscriptionService.start();
      } else {
        console.log(chalk.bold.blue("Connecting to MongoDB"));
        console.info(`Connecting to MongoDB at ${mongoURI}]`);
        const mongooseConnection = await connect(
          mongoURI,
          { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true  },
        );
        console.info(
          `Connection to MongoDB at ${mongoURI}] successful, Starting subscriptions \n`,
        );
        SubscriptionService.start(mongooseConnection);
      }
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
          SubscriptionService.getSubscriptions(),
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
