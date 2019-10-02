#!/bin/node
const fs = require('fs');

const cwd = process.env.INIT_CWD
console.log("cwd", cwd);

const getTemplateEnv = () => {
  const envFile = cwd + "/node_modules/@hfc/pubsub/.env.example";
  return envFile;
}

const getMainFile = () => {
  const main = cwd + "/node_modules/@hfc/pubsub/src/cli/subscriptions.ts";
  return main;
}
const getCliFile = () => {
  const cli = cwd + "/node_modules/@hfc/pubsub/src/cli/subscriptions.ts";
  return cli;
}

const copyFile = function (source, target, overwrite=false, executable=false) {
  console.log("trying to copy", source, "to", target);
  if (!fs.existsSync(target)) {
    fs.copyFileSync(source, target);
  } else if (fs.existsSync(target) && overwrite) {
    console.log('target exists');
    fs.copyFileSync(source, target);
    if (executable) {
      fs.chmodSync(target, "755");
    } 
  }
}

const requireDotEnv = function (file, envReference) {
  const source = cwd + '/.env';
  const requireDotEnv = `require('dotenv').config({ path: ${envReference} });`;;
  if (fs.existsSync(source) &&
      fs.existsSync(file) && 
      !fs.readFileSync(file).toString().match(/require\('dotenv'\)/gm)
  ) {
    var fileLineByLine = fs.readFileSync(file).toString().match(/^.+$/gm);
    fileLineByLine[1] = fileLineByLine[1].concat(`\n${requireDotEnv}\n`);
    fs.writeFileSync(file, fileLineByLine.join("\n"));
  }
};

const copyEnv = () => {
  const source = getTemplateEnv();
  let target = cwd + "/.env";
  copyFile(source, target, false);
}

const setCliEnvLocation = () => {
  const target  = getCliFile();
  requireDotEnv(target, "__dirname + '/../../../../../.env'");
}
const createBinDir = () => {
  if(!fs.existsSync(cwd + '/bin')) {
    fs.mkdirSync(cwd + '/bin');
  }
}

try {
  copyEnv();
  setCliEnvLocation();
} catch (e) {
  console.log(e);
}
