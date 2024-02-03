const baseConfig = require('../../scripts/jest.config.js')

module.exports = {
  ...baseConfig,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@sohey/utils$': require.resolve('@sohey/utils'),
    '^@sohey/types$': require.resolve('@sohey/types')
  }
}
