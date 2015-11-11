var path = require('path');

module.exports = {
  target: 'web',
  context: path.join(__dirname, '..'),
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './public'
  },

  entry: './src/bootstrap.js',

  output: {
    path: './public',
    filename: 'index.js'
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel'
      }
    ]
  }
};