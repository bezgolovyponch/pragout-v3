const withSass = require('@zeit/next-sass');
const withVideos = require('next-videos');

const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = withVideos(
  withSass({
    /* config options here */
    i18n: {
      locales: ['en', 'ms'],
      defaultLocale: 'en',
    },
    env: {
      SPREADSHEET_ID: '0',
      SHEET_ID: '0',
      CLIENT_EMAIL: CLIENT_EMAIL,
      PRIVATE_KEY: PRIVATE_KEY,
    },
    webpack: (config, options) => {
      config.node = {
        // Some libraries import Node modules but don't use them in the browser.
        // Tell Webpack to provide empty mocks for them so importing them works.
        ...config.node,
        fs: 'empty',
        child_process: 'empty',
        net: 'empty',
        tls: 'empty',
      };

      return config;
    },
  }),
);
