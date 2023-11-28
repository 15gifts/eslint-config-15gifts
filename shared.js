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
    "comma-dangle": ["error", "always-multiline"],
    curly: ["error", "multi-line", "consistent"],
    "no-self-compare": "error",
    "no-unused-vars": "off", // replaced by @typescript-eslint/no-unused-vars
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: false, argsIgnorePattern: "^_" },
    ],
    "no-shadow": "off", // replaced by @typescript-eslint/no-shadow
    "@typescript-eslint/no-shadow": ["error"],
    "node/no-deprecated-api": "warn",
    semi: "off",
    "@typescript-eslint/semi": ["error", "never"],
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": ["error", "asc", { natural: true }],
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
    "no-constant-binary-expression": "error",
  },
};
