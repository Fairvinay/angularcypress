const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');

module.exports = defineConfig({
  e2e: {
	   setupNodeEvents(on, config) {
		    const options = {
			...browserify.defaultOptions,
			// typeScript: resolve.sync('typescript', { baseDir: config.projectRoot }),  // WRONG
			typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),  // CORRECT
			}
		   on('file:preprocessor', cucumber(options))
      // implement node event listeners here
	   //supportFile: 'cypress/support/index.ts'
	   //  pluginsFile: 'cypress/plugins/index.js', testFiles: '**/*.{feature,features}',
      },
    baseUrl: 'http://localhost:50060',
	specPattern:[ '**/*.feature','cypress/integration/*.spec.{js,feature,ts,tsx}'],
	
	
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
 
  fixturesFolder: 'cypress/fixtures',

   defaultCommandTimeout: 50000,
  pageLoadTimeout : 180000,
  experimentalSourceRewriting: false,
  watchForFileChanges :  false,
  execTimeout : 60000,
  retries : 2,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 0,
  modifyObstructiveCode : false
  }
})