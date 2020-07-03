"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const chalk_1 = __importDefault(require("chalk"));
const cli_ux_1 = require("cli-ux");
const wrapAnsi = require("wrap-ansi");
exports.default = {
    command: 'list',
    desc: 'Lists all subscriptions',
    handler: async () => {
        console.log(chalk_1.default.white.bgBlue.bold('\n Subscriptions registered in SubscriptionService '), '\n');
        if (index_1.PubSubService.getInstance().getSubscribers().length == 0) {
            console.log(chalk_1.default.white.bold('\n No subscriptions found'));
        }
        else {
            cli_ux_1.cli.table(index_1.PubSubService.getInstance().getSubscribers(), {
                'Topic Name': {
                    get: (row) => row[1].topicName,
                },
                'Subscription Name': {
                    get: (row) => row[1].subscriptionName,
                },
                Description: {
                    get: (row) => wrapAnsi(row[1].description || '', 100),
                },
            }, {
                printLine: console.log,
            });
            console.log('\n');
        }
    },
};
