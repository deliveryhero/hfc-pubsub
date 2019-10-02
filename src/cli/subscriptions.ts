/* eslint-disable @typescript-eslint/no-unused-vars */
import { config } from "dotenv"
import { resolve } from "path"
config({ path: resolve(__dirname + "../../../.env") });
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
      console.log(chalk.bold.blue("Starting Subscriptions Client"));
      const mongoURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
      if (!mongoURI) {
        SubscriptionService.start();
      } else {
        console.log(chalk.bold.blue("Connecting to MongoDB"));
        console.info(`Connecting to MongoDB at ${mongoURI}]`);
        const mongooseConnection = await connect(
          mongoURI,
          { useNewUrlParser: true, useFindAndModify: false },
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
      if (!SubscriptionService.subscriptions || SubscriptionService.subscriptions && SubscriptionService.subscriptions.length == 0) {
        console.log(chalk.white.bold("\n No subscriptions found"));
      } else {
        cli.table(
          SubscriptionService.subscriptions,
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
        console.log("\n \n");
      }
    },
  ).argv;
