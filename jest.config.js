process.env.PUBSUB_ROOT_DIR = './__tests__/pubsub';
const TEST_REGEX = '/__tests__/.*.test.(js|ts|tsx)?$';
module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: TEST_REGEX,
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
