exports.config = {
  baseUrl: 'http://localhost:8080',
  rootElement: 'app',
  allScriptsTimeout: 11000,
  getPageTimeout: 10000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  suites: {
    app: '../test/app.spec.js'
  },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  }
};