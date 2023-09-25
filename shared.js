/*
 * This config is shared between the default and react configs
 */
module.exports = {
  plugins: [
    "jest",
    "jsdoc",
    "sort-keys-fix",
    "sort-destructure-keys",
    "node",
    "@typescript-eslint",
  ],
  rules: {
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": ["error", "always-multiline"],
    curly: ["error", "multi-line", "consistent"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", ignoreRestSiblings: false },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "node/no-deprecated-api": "warn",
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],
    "import/prefer-default-export": "off",
    "prefer-destructuring": "off",
    "import/no-cycle": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        mjs: "never",
      },
    ],
    "dot-notation": "off",
  },
};
