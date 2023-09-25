const shared = require("./shared.js");

/**
 * This is the default config, it can be used by extending '@15gifts/eslint-config'
 * For React projects, see './react.js'
 */
module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: [...shared.plugins],
  rules: {
    ...shared.rules,
  },
};
