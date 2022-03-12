module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
  },
  plugins: ['react', '@next/eslint-plugin-next', 'prettier'],
  rules: {
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
  },
}
