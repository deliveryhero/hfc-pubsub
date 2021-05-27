module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-cycle': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      // For tests
      files: ['*.test.{ts,js}', './**/__tests__/*.*'],
      env: {
        jest: true,
      },
      rules: {
        'max-lines': 'off',
        // These are off since we require dynamically after mocks are set
        '@typescript-eslint/no-var-requires': 'off',
        'global-require': 'off',
      },
    },
  ],
};
