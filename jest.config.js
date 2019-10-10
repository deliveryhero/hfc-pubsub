const TEST_REGEX = "/__tests__/.*.test.(js|ts|tsx)?$";
module.exports = {
    roots: ['<rootDir>'],
    transform: {
      "^.+\\.ts$": "ts-jest",
      "^.+\\.tsx?$": "babel-jest",
    },
    testRegex: TEST_REGEX,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}  