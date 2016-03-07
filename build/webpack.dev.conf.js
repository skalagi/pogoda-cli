var config = require('./webpack.base.conf');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.devtool = 'eval-source-map';

config.devServer = {
  host: '0.0.0.0',
  historyApiFallback: true,
  noInfo: true,
};

config.output.publicPath = '/';

config.plugins = (config.plugins || []).concat([

  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html',
  }),
]);

module.exports = config;
