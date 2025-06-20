const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dummyjson.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  }
});
