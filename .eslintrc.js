module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
  },
  extends: ['next/core-web-vitals', 'prettier', 'plugin:import/recommended'],
  plugins: [
    'react',
    '@next/eslint-plugin-next',
    'prettier',
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    'import/default': ['error'],
    'import/first': ['error', 'absolute-first'],
    'import/named': ['error'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-unresolved': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          ['internal', 'parent', 'index'],
          'sibling',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'react/no-unknown-property': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        endOfLine: 'lf',
      },
    ],
  },
}
