const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const common = require('./common');

module.exports = {
  mode: 'development',
  entry: common.entry,
  module: common.module,
  resolve: {
    extensions: common.resolve.extensions,
  },
  output: common.output,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env',
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: common.resolve
}