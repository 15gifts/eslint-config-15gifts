const config = require("../../index")

module.exports = {
  ...config,
  parserOptions: {
    project: "./test/tsconfig.json",
  },
}
