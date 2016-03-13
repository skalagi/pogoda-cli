module.exports = [
  {
    event: 'push',
    pattern: /pogoda-cli/,
    script: './deploy.sh',
  },
];
