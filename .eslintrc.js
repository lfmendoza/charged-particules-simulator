module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      'plugin:import/typescript',
    ],
    settings: {
        "import/resolver": {
            typescript: true,
            node: true
        },
        "import/extensions": [
        ".js",
        ".jsx"
        ]
    },
    rules: {
      // Additional rules if needed
    },
  };
  