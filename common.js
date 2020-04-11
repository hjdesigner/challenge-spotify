const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', "eslint-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      reduxFlow: path.resolve(__dirname, 'src/reduxFlow/'),
      components: path.resolve(__dirname, 'src/components/'),
      views: path.resolve(__dirname, 'src/views/'),
      utils: path.resolve(__dirname, 'src/utils/')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
};