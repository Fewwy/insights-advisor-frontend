const { defineConfig } = require('cypress');
const webpackConfig = require('./config/cypress.webpack.config.js');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
  },

  component: {
    devServer: {
      framework: 'react', // or vue
      bundler: 'webpack',
      webpackConfig,
    },
  },
});
