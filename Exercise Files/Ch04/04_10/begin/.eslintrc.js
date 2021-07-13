'use strict';

module.exports = {
  env: {
    es6: true,
  },
  rules: {
    strict: ['error', 'global'],
    'multiline-comment-style': ['error', 'starred-block'],
    'spaced-comment': ['error', 'always'],
    semi: ['error', 'always'],
    'semi-spacing': 'error',
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'max-len': ['error', { 'code': 80 }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
