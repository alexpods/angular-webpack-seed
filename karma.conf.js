// Karma configuration
// Generated on Tue Nov 10 2015 10:45:58 GMT+0300 (MSK)

module.exports = function(config) {
  config.set({
    basePath: '',
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity,
    reporters: ['progress'],
    frameworks: ['jasmine'],

    files: [
      './src/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }
  })
};
