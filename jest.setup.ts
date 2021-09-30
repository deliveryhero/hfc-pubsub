import path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: require('find-config')('.env') });

process.env.PUBSUB_ROOT_DIR = path.resolve(__dirname, '__tests__', 'pubsub');

jest.mock('google-gax');
