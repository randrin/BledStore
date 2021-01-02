module.exports = {
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 11,
    },
    rules: {
      'no-console': 0,
      'no-underscore-dangle': 0,
      'linebreak-style': 0,
      'import/prefer-default-export': 0,
      'import/no-unresolved': 0,
      'arrow-body-style': 0,
      'import/no-extraneous-dependencies': 0,
      'import/extensions': 0,
      'no-nested-ternary': 0,
      'no-use-before-define': 0,
      'no-undef': 0,
      'import/order': 0,
      'no-alert': 0,
      'no-restricted-globals': 
    },
  };