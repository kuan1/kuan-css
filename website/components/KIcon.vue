<template>
  <div class="test-item">
    <h2>常用图标</h2>
    <i v-for="item in names" @click="copy(item)" :key="item" class="iconfont" :class="item"></i>
  </div>
</template>

<script>
import copy from './utils/copy'
export default {
  data() {
    return {
      names: [
        'icon-search',
        'icon-check',
        'icon-close',
        'icon-add',
        'icon-move',
        'icon-edit',
        'icon-share',
        'icon-like',
        'icon-likefill',
        'icon-delete',
        'icon-deletefill',
        'icon-filter',
        'icon-roundcheck',
        'icon-roundcheckfill',
        'icon-appreciate',
        'icon-appreciatefill',
        'icon-emoji',
        'icon-double-arrow-left',
        'icon-arrow-left',
        'icon-arrow-right',
        'icon-double-arrow-right',
        'icon-arrow-top',
        'icon-arrow-bottom'
      ]
    }
  },
  methods: {
    copy(item) {
      const name = `iconfont ${item}`
      copy(name)
      alert(`${name}复制成功`)
    }
  }
}
</script>

<style scoped>
.iconfont {
  margin-right: 2px;
}
</style>
