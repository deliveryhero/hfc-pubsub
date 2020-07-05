"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: require('find-config')('.env') });
const index_1 = require("../../index");
const chalk_1 = __importDefault(require("chalk"));
const cli_ux_1 = require("cli-ux");
exports.default = {
    command: 'subscriptions',
    desc: 'Lists all subscriptions',
    handler: async () => {
        console.log(chalk_1.default.white.bgBlue.bold('\n All Subscriptions'), '\n');
        const subscriptions = await index_1.PubSubService.getInstance().getAllSubscriptions();
        if (subscriptions.length == 0) {
            console.log(chalk_1.default.white.bold('\n No subscriptions found'));
        }
        else {
            cli_ux_1.cli.table(subscriptions, {
                'Topic Name': {
                    get: (row) => row.topicName || '',
                },
                'Subscription Name': {
                    get: (row) => row.subscriptionName,
                },
            }, {
                printLine: console.log,
            });
            console.log('\n');
        }
    },
};
