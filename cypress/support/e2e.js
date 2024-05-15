// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-iframe';
require("@cypress/xpath");

import "cypress-mochawesome-reporter/register";

Cypress.on('before:browser:launch', (browser, launchOptions) => {
  if (browser.name === 'chrome' || browser.name === 'chromium') {
    launchOptions.args.push('--disable-web-security');
    return launchOptions;
  }
});

beforeEach(() => {
  cy.viewport("macbook-16");
  // cy.visit(Cypress.env("baseUrl"));
});