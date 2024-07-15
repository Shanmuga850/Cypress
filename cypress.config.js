const { defineConfig } = require("cypress");

module.exports = defineConfig({

reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
  video: true,
  embedVideos: true,
  charts: true,
  reportPageTitle: 'ButtonShift',
  embeddedScreenshots: true,
  inlineAssets: true,
  saveAllAttempts: false,
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: true,
  timestamp: 'mmddyyyy_HHMMss'
},
e2e: {
  setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
  },

 

    defaultCommandTimeout: 15000,
    specPattern: 'cypress/integration/buttonshift/*.js',
    screenshotsFolder: 'cypress/failures/screenshots'
  },
});
