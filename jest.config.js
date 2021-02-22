module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: { '.(js|jsx|tx|tsx)': '@sucrase/jest-plugin' },
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
};
