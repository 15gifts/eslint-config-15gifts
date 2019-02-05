module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'standard'
    ],
    parser: 'babel-eslint',
    env: {
      es6: true,
      browser: true,
      mocha: true,
      node: true,
      jest: true
    },
    settings: {
        react: {
            version: '16.0'
        },
        'import/resolver': {
            node: {
            paths: ['./src']
            }
        }
    },
    plugins: [
      'react',
      'jsdoc'
    ],
    rules: {
      "node/no-deprecated-api": 1
    }
  }
  
