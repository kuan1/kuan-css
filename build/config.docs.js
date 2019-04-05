const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const { html: htmlPath } = require('./defaults')

const config = require('./config.base')
// const { resolve } = require('./utils')

module.exports = webpackMerge(config, {
  mode: 'production',
  output: {
    path: `${__dirname}/../docs`,
    publicPath: '.'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlPath,
      hash: true
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  }
})
