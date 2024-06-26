module.exports = {
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      ['feat', 'update', 'fix', 'del', 'refactor', 'docs', 'chore', 'test', 'revert'],
    ],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', []],
  },
};
