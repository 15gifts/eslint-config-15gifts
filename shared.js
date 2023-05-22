module.exports = {
  plugins: ["jsdoc", "sort-keys-fix", "sort-destructure-keys", "node"],
  rules: {
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": ["error", "always-multiline"],
    curly: ["error", "multi-line", "consistent"],
    "no-unused-vars": ["error", { ignoreRestSiblings: false }],
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
      },
    ],
  },
};
