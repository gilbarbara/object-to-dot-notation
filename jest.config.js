module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
    './src',
  ],
  testRegex: '/test/.*?\\.(test|spec)\\.js$',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  verbose: true,
};
