const shared = require("./shared.js");

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
