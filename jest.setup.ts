import path from 'path';
import { setLogger } from './src/service/logger';

setLogger({
  info: () => {
    //
  },
  debug: () => {
    //
  },
  error: (...args) => {
    console.error(...args);
  },
  warn: () => {
    //
  },
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: require('find-config')('.env') });

process.env.PUBSUB_ROOT_DIR = path.resolve(__dirname, '__tests__', 'pubsub');
