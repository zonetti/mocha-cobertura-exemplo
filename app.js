module.exports = process.env.TEST_COVERAGE
  ? require('./src-cov')
  : require('./src');