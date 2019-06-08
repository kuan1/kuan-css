const { resolve } = require('./utils')

module.exports = {
  port: 8000, // 开发端口
  proxy: {}, // 代理地址
  // 打包入口 默认： src/index.js
  entry: {
    index: resolve('src')
  },
  publicPath: '', // cdn路径 默认：空
  staticPath: resolve('public'), // 静态资源目录 public
  distPath: resolve('lib'), // 输入地址 默认： dist
  html: resolve('index.html') // 默认html模板
}