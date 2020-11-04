module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      "allowImportExportEverywhere": true
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
};
