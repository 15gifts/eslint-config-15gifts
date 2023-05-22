const shared = require("./shared.js");

module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:storybook/recommended",
    // "@15gifts/eslint-config/another",
    // "airbnb/hooks",
  ],
  plugins: [...shared.plugins, "@emotion"],
  rules: {
    ...shared.rules,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/jsx-props-no-spreading": "warn",
  },
};
