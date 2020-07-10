"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const chalk_1 = __importDefault(require("chalk"));
exports.default = {
    command: 'start',
    desc: 'Will listen to Google Pub/Sub topics and initialize their event handlers',
    handler: async (argv) => {
        argv;
        console.log(chalk_1.default.bold.blue('Starting HFC Subscriptions Server'));
        index_1.PubSubService.getInstance().startSubscriptions();
    },
};
