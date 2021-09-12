module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'import-helpers'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
