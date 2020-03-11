module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/server/**/*.js',
    'src/app/controllers/**/*.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'lcov',
  ],
  testEnvironment: 'node',
};
