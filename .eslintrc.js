// // const OFF = 0;
// // const WARN = 1;
// const ERROR = 2

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'airbnb',
//     'airbnb/hooks',
//     'plugin:react/recommended',
//     'plugin:unicorn/recommended',
//     'plugin:promise/recommended',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
//   rules: {
//     'import/extensions': [
//       ERROR,
//       'ignorePackages',
//       {
//         ts: 'never',
//         tsx: 'never',
//         json: 'never',
//         js: 'never',
//       },
//     ],
//     // 'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
//     "react/function-component-definition": [
//       2,
//       {
//         namedComponents: "arrow-function",
//         unnamedComponents: "arrow-function",
//       },
//     ],
//   },
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.tsx', '.ts', '.js', '.json'],
//       },
//     },
//   },
// }
