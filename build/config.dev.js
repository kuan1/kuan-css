const fs = require('fs')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const base = require('./config.base')
const options = require('./defaults')
const { proxy, publicPath, html: htmlPath } = options

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
    }),
    new CopyWebpackPlugin(
      fs.existsSync(options.staticPath)
        ? [
            {
              from: options.staticPath,
              to: '',
              ignore: ['.*']
            }
          ]
        : []
    )
  ]
})
