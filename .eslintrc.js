const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true, // we need to keep it for process.env
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:jest/style',
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [ 'prettier', 'react-hooks' ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'operator-linebreak': 'off', // it conflicts with prettier;
    'import/no-extraneous-dependencies': [ 'error' ],
    'no-case-declarations': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true, // e.g. <div onClick={() => {}}>
        reservedFirst: true, // e.g. <div key={id} />
        shorthandLast: true, // e.g. <div active>
        ignoreCase: false,
        noSortAlphabetically: false,
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-max-depth': ['error', { max: 3 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-large-snapshots': [
      'error',
      {
        maxSize: 100,
        inlineMaxSize: 20,
      },
    ],
    'jest/valid-title': 'off',
    'no-unused-vars': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'class-methods-use-this': 'off',
    'no-console': ['error', { allow: ['error'] }],
  },
};