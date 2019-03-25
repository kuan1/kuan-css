const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./config.base')
const { proxy, publicPath, html: htmlPath } = require('./defaults')

module.exports = webpackMerge(base, {
  mode: 'development',
  devServer: {
    disableHostCheck: true,
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    quiet: true,
    headers: {
      'access-control-allow-origin': '*'
    },
    watchOptions: {
      ignored: /node_modules/
    },
    historyApiFallback: false,
    overlay: false,
    proxy,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlPath,
      path: publicPath,
      hash: true
    })
  ]
})
