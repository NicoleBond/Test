const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.js", // Path to test files
    supportFile: "cypress/support/e2e.js", // Support file path
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true, // Set to false to disable video recording
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    retries: 2, // Number of retry attempts for failed tests
  },
});