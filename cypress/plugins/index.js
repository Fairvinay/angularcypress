const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');
module.exports = (on, config) => {
   const options = {
    ...browserify.defaultOptions,
// typeScript: resolve.sync('typescript', { baseDir: config.projectRoot }),  // WRONG
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),  // CORRECT
  }
	
	
  on('file:preprocessor', cucumber())
}