const withSass = require('@zeit/next-sass');
const withVideos = require('next-videos');

module.exports = withVideos(
  withSass({
    /* config options here */
    env: {
      SPREADSHEET_ID: process.env.SPREADSHEET_ID,
      GOOGLE_SHEETS_CLIENT_EMAIL: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      GOOGLE_SHEETS_PRIVATE_KEY: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
    },
    webpack5: false,
    webpack: (config, options) => {
      config.node = {
        // Some libraries import Node modules but don't use them in the browser.
        // Tell Webpack to provide empty mocks for them so importing them works.
        ...config.node,
        dns: 'mock',
        fs: 'empty',
        path: true,
        url: false,
        child_process: 'empty',
        net: 'empty',
        tls: 'empty',
      };

      return config;
    },
  }),
);
