const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity: false,
  env: {
    username: "shery123",
    password: "Password123*",
    // baseUrl: "https://automationteststore.com/"
  },

  video: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    overwrite: true,
    html: true,
    json: true,
    reportDir: "cypress/report",
    reportFilename: "report",
    inline: true,
  },

  e2e: {
    defaultCommandTimeout: 60000,
    requestTimeout: 50000,
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    experimentalRunAllSpecs: true,
    watchForFileChanges: false,
    // retries: 2,
  },
});
