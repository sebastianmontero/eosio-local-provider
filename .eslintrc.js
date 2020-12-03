module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'no-console': ['off'],
    'no-underscore-dangle': ['off'],
    'class-methods-use-this': ['off'],
    'no-param-reassign': ['off'],
    'no-restricted-syntax': ['off'],
    'no-prototype-builtins': ['off'],
    'guard-for-in': ['off']
  }
}
