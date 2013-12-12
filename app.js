module.exports = process.env.TEST_COV
  ? require('./src-cov')
  : require('./src');