process.env.PUBSUB_ROOT_DIR = './__tests__/pubsub';
const TEST_REGEX = '/__tests__/.*.test.(js|ts|tsx)?$';
module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: TEST_REGEX,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
