var webpack = require('webpack');
var config = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.output.filename = '[name].[chunkhash].js';
config.output.chunkFilename = '[id].[chunkhash].js';

config.devtool = 'source-map';

function generateExtractLoaders(loaders) {
  return loaders.map(function(loader) {
    return loader + '-loader?sourceMap';
  }).join('!');
}

config.vue.loaders = {
  js: 'babel!jscs',
  css: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css'])),
  less: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'less'])),
  sass: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'sass'])),
  stylus: ExtractTextPlugin.extract('vue-style-loader', generateExtractLoaders(['css', 'stylus'])),
},

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
  new webpack.optimize.OccurenceOrderPlugin(),

  new ExtractTextPlugin('[name].[contenthash].css'),

  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: 'src/index.html',
  }),
]);

module.exports = config;
