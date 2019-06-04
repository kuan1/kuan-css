document.querySelectorAll('button').forEach(target => {
  target.onclick = () => alert('点击')
})

document.querySelectorAll('.iconfont').forEach(target => {
  target.onclick = function () {
    copy(this.className)
    alert(`${this.className}复制成功`)
  }
})
