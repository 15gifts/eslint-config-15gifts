const config = require("../../react");

module.exports = {
  ...config,
  parserOptions: {
    project: "./test/tsconfig.json",
  },
  rules: {
    ...config.rules,
    "react/prop-types": "off", // prop-types is still used in Leap but should be replaced by typescript
    "react/require-default-props": "off", // prop-types is still used in Leap but should be replaced by typescript
  },
  ignorePatterns: [".eslintrc.js"],
};
