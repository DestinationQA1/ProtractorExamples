import {Config} from 'protractor';

export let config: Config = {
  //directConnect: true, 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        // allows different specs to run in parallel.
        // If this is set to be true, specs will be sharded by file
        // (i.e. all files to be run by this set of capabilities will run in parallel).
        // Default is false.
        shardTestFiles: true,
        
        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        maxInstances: 2,
    },
     
    specs: ['FirstTest.js', 'CalcLocators.js']
};