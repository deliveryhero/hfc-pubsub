#!/bin/node
const fs = require('fs');

const cwd = process.env.INIT_CWD;
console.log('cwd', cwd);

const getTemplateEnv = () => {
  const envFile = cwd + '/node_modules/@honestfoodcompany/pubsub/.env.example';
  return envFile;
};

const copyFile = function(
  source,
  target,
  overwrite = false,
  executable = false,
) {
  if (!fs.existsSync(target)) {
    fs.copyFileSync(source, target);
  } else if (fs.existsSync(target) && overwrite) {
    fs.copyFileSync(source, target);
    if (executable) {
      fs.chmodSync(target, '755');
    }
  }
};

const copyEnv = () => {
  const source = getTemplateEnv();
  const target = cwd + '/.env';
  copyFile(source, target, false);
};

if (process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'prod') {
  try {
    copyEnv();
  } catch (e) {
    console.log(e);
  }
}
