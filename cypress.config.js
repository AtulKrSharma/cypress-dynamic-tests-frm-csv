const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const webpackDefaults = webpackPreprocessor.defaultOptions;
      webpackDefaults.webpackOptions.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      });
      on('file:preprocessor', webpackPreprocessor(webpackDefaults));
    },
  },
});
