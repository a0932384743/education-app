module.exports = {
  root: true,
  env: {
    'jest/globals': true,
    browser: true,
    node: true,
    es6: true,
  },

  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  globals: {
    moment: 'readonly',
  },
  plugins: ['jest', 'vue'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // 匿名函数需要空格
        named: 'never', // 命名函数不允许空格
        asyncArrow: 'never', // 异步箭头函数需要空格
      },
    ],
    'sort-imports': 1,
    semi: [2, 'always'],
    quotes: [2, 'single'],
    'comma-dangle': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,
  },
  ignorePatterns: ['static/js/*.js'],
}
