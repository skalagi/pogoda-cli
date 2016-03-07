var path = require('path');

module.exports = {
  entry: {
    app: './src/weather.js',
  },
  output: {
    path: './dist/static',
    publicPath: '/static/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.styl'],
    alias: {
      src: path.resolve(__dirname, '../src'),
    },
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    preLoaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader: 'jscs-loader',
      },
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, '../node_modules/@pogoda'),
          path.resolve(__dirname, '../src'),
        ],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  vue: {
    loaders: {
      js: 'babel!jscs',
    },
  },
};
