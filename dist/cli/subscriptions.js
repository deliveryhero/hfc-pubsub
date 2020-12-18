#! /usr/local/bin/node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: require('find-config')('.env') });
const commands_1 = __importDefault(require("./commands"));
require('yargs')
    .command(commands_1.default.start)
    .command(commands_1.default.list).argv;
