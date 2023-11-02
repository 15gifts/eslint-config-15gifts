const config = require("../../index");

module.exports = {
  ...config,
  parserOptions: {
    project: "./test/tsconfig.json",
  },
  ignorePatterns: [".eslintrc.js"],
};
