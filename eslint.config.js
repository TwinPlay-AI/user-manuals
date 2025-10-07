const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
      },
    },
    rules: {
      // Regole personalizzate per JavaScript
      "no-console": "warn",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-undef": "error",
      "no-unreachable": "error",
      "no-duplicate-imports": "error",
    },
  },
  {
    ignores: [
      "node_modules/",
      "build/",
      ".docusaurus/",
      "static/",
      "*.min.js",
      "dist/",
    ],
  },
];
