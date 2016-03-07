var webpackConf = require('./webpack.base.conf');
delete webpackConf.entry;

module.exports = function(config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter'),
    ],
    files: ['../test/*.js'],
    browsers: ['PhantomJS'],
    frameworks: ['tap'],
    reporters: ['spec'],
    preprocessors: {
      '../test/*.js': ['webpack'],
    },
    webpack: Object.assign({
      node: {
        fs: 'empty',
      },
    }, webpackConf),
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
