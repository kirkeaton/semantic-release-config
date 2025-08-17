module.exports = {
  branches: ['+([0-9])?(.{+([0-9]),x}).x', 'main'],
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
