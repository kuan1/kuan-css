const fs = require('fs')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const loaders = require('./loaders')
const options = require('./defaults')

const { resolve } = require('./utils')

module.exports = {
  entry: options.entry,
  output: {
    path: options.distPath,
    publicPath: options.publicPath
    // filename: `${options.libName}.js`
  },
  module: {
    noParse: [/moment.js/],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: loaders.babelLoader
      },
      {
        test: /\.css$/,
        use: loaders.generateCssLoader()
      },
      {
        test: /\.scss$/,
        use: loaders.generateSassLoader()
      },
      {
        test: /\.less$/,
        use: loaders.generateLessLoader()
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/gi,
        use: loaders.generateUrlLoader('images')
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: loaders.generateUrlLoader('fonts')
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      '@': resolve('src')
    }
  }
}
