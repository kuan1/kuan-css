<template>
  <div class="test-item">
    <h2>常用图标</h2>
    <i v-for="item in names" @click="copy(item)" :key="item" class="iconfont" :class="item"></i>
  </div>
</template>

<script>
import copy from '@/utils/copy'
export default {
  data() {
    return {
      names: [
        'icon-right',
        'icon-back', 'icon-back_light', 'icon-add', 'icon-move', 'icon-filter', 'icon-double-arrow-right', 'icon-double-arrow-left', 'icon-appreciate', 'icon-appreciatefill', 'icon-check', 'icon-close', 'icon-edit', 'icon-emoji', 'icon-favorfill', 'icon-favor', 'icon-locationfill', 'icon-location', 'icon-roundcheck', 'icon-roundclosefill', 'icon-roundclose', 'icon-roundrightfill', 'icon-roundright', 'icon-search', 'icon-likefill', 'icon-like', 'icon-top', 'icon-moreandroid', 'icon-home', 'icon-deletefill', 'icon-homefill', 'icon-share', 'icon-radiobox', 'icon-radioboxfill', 'icon-full'
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

<style>
</style>
