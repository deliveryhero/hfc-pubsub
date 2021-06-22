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
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'internal',
          'external',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
    'import/internal-regex':
      '^(@deliveryhero|@honestfoodcompany|react|next)(/.+)?$',
  },
  overrides: [
    {
      // For tests
      files: ['*.test.{ts,js}', './**/__tests__/**/*.*'],
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
    {
      // For examples
      files: ['./examples/**/*.*'],
      rules: {
        'import/no-unresolved': [
          'error',
          { ignore: ['@honestfoodcompany/pubsub', '@deliveryhero/pubsub'] },
        ],
      },
    },
  ],
};
