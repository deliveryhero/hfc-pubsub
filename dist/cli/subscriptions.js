#! /usr/local/bin/node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: require('find-config')('.env') });
const subscription_service_1 = require("../subscription.service");
const mongoose_1 = require("mongoose");
const cli_ux_1 = require("cli-ux");
const chalk_1 = require("chalk");
const wrapAnsi = require("wrap-ansi");
require("yargs")
    .command("start", "Will listen to Google Pub/Sub topics and initialize their event handlers", (yargs) => {
    yargs;
}, async (argv) => {
    argv;
    console.log(chalk_1.default.bold.blue("Starting HFC Subscriptions Server"));
    const mongoURI = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";
    if (!mongoURI) {
        subscription_service_1.default.start();
    }
    else {
        console.log(chalk_1.default.bold.blue("Connecting to MongoDB"));
        console.info(`Connecting to MongoDB at ${mongoURI}]`);
        const mongooseConnection = await mongoose_1.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });
        console.info(`Connection to MongoDB at ${mongoURI}] successful, Starting subscriptions \n`);
        subscription_service_1.default.start(mongooseConnection);
    }
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