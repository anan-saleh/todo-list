module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'always'],
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-undef': 'error',
    'camelcase': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'eqeqeq': 'error',
    'quotes': ['error', 'single'],
    'no-var': 'error',
    'no-const-assign': 'error',
    'no-else-return': 'error',
    'prefer-arrow-callback': 'error'
  },
};
