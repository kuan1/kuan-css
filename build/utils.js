const path = require('path')
const fs = require('fs')

// 根目录路径
function resolve(...dir) {
  return path.resolve(__dirname, '..', ...dir)
}

module.exports = {
  resolve
}