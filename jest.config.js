process.env.PUBSUB_ROOT_DIR = './__tests__/pubsub';
const TEST_REGEX = '/__tests__/.*.test.(js|ts)?$';
module.exports = {
  // FIXME: Automatically clear mock calls and instances between every test
  // clearMocks: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!**/*.{generated,interface,test,data,enums}.{ts}',
    '!**/*.d.ts',
    '!src/__tests__/**',
    '!**/node_modules/**',
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['html', 'text-summary', 'lcov'],

  // An object that configures minimum threshold enforcement for coverage results
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },

  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleNameMapper: {
    '^@honestfoodcompany/pubsub$': '<rootDir>/src',
    '^@deliveryhero/pubsub$': '<rootDir>/src',
  },

  /** @see https://kulshekhar.github.io/ts-jest/docs/getting-started/installation */
  preset: 'ts-jest/presets/js-with-babel',

  roots: ['<rootDir>'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ['./jest.setup.ts'],

  // The test environment that will be used for testing
  testEnvironment: 'node',
  testRegex: TEST_REGEX,
};
