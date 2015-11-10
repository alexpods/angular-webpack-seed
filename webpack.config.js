module.exports = {
  target: 'web',
  context: __dirname,

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