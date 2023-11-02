const shared = require("./shared.js");

/*
 * This config can be used by extending '@15gifts/eslint-config/react'
 * For non-React projects, see './index.js'
 */
module.exports = {
  env: {
    browser: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "prettier",
  ],
  settings: {
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  plugins: [...shared.plugins, "@emotion"],
  rules: {
    ...shared.rules,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
  },
};
