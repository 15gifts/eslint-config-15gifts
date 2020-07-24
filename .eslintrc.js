module.exports = {
  extends: [
    'airbnb-standard'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 10
  },
  env: {
    es6: true,
    browser: true,
    mocha: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src']
      }
    }
  },
  plugins: [
    'jsdoc',
    'sort-destructure-keys',
    'node'
  ],
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'comma-dangle' : [2, 'always-multiline'],
    'curly': [2, 'multi-line', 'consistent'],
    'no-unused-vars': [2, { 'ignoreRestSiblings': false }],
    'node/no-deprecated-api': 1,
    'sort-destructure-keys/sort-destructure-keys': 2
  }
}
