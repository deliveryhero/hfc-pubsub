#! /usr/local/bin/node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: require('find-config')('.env') });
const subscription_service_1 = require("../subscription.service");
const cli_ux_1 = require("cli-ux");
const chalk_1 = require("chalk");
const wrapAnsi = require("wrap-ansi");
require("yargs")
    .command("start", "Will listen to Google Pub/Sub topics and initialize their event handlers", (yargs) => {
    yargs;
}, async (argv) => {
    argv;
    console.log(chalk_1.default.bold.blue("Starting HFC Subscriptions Server"));
    subscription_service_1.default.start();
})
    .command("list", "Lists all subscriptions", (yargs) => {
    yargs;
}, (argv) => {
    argv;
    console.log(chalk_1.default.white.bgBlue.bold("\n Subscriptions registered in SubscriptionService "), "\n");
    subscription_service_1.default.getSubscriptions();
    if (subscription_service_1.default.getSubscriptions().length == 0) {
        console.log(chalk_1.default.white.bold("\n No subscriptions found"));
    }
    else {
        cli_ux_1.cli.table(subscription_service_1.default.getSubscriptions(), {
            "Topic Name": {
                get: (row) => row.getTopicName(),
            },
            "Subscription Name": {
                get: (row) => row.getSubscriptionName(),
            },
            Description: {
                get: (row) => wrapAnsi(row.getDescription(), 100),
            },
        }, {
            printLine: console.log,
        });
        console.log("\n");
    }
}).argv;
//# sourceMappingURL=subscriptions.js.map