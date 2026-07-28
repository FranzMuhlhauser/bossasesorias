// @ts-check
const next = require('eslint-config-next');

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  ...next,
  {
    rules: {
      // Personalizaciones sobre la configuración base de eslint-config-next
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];

module.exports = eslintConfig;
