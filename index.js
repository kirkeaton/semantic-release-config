module.exports = {
  branches: ['main'],
  ci: false,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        failCommentCondition: false,
        labels: false,
        releasedLabels: false,
        successCommentCondition: false,
      },
    ],
  ],
};
