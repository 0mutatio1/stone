// const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    // 'prettier' 及之后的配置要放到原来添加的配置的后面，这样才能让 prettier 禁用之后与其冲突的规则。
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
    'stylelint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'unicorn',
    'promise',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
    // 'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
  },
};
