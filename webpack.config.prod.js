const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const common = require('./common');

module.exports = {
  mode: 'Production',
  entry: common.entry,
  module: common.module,
  resolve: {
    extensions: common.resolve.extensions,
  },
  output: common.output,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.production',
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: common.resolve
}