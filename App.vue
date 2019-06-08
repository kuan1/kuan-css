<template>
  <div>
    <k-icon></k-icon>
    <k-button></k-button>
    <k-input></k-input>
    <k-balloon></k-balloon>
    <k-one-px></k-one-px>
    <k-triangle></k-triangle>
    <k-loading></k-loading>
    <k-process></k-process>
    <k-animate></k-animate>
  </div>
</template>

<script>
import KIcon from './test/KIcon'
import KButton from './test/KButton'
import KInput from './test/Kinput'
import KLoading from './test/KLoading'
import KProcess from './test/KProcess'
import KAnimate from './test/KAnimate'
import KTriangle from './test/KTriangle'
import KBalloon from './test/KBalloon'
import KOnePx from './test/KOnePx'

export default {
  components: {
    KIcon,
    KButton,
    KInput,
    KLoading,
    KProcess,
    KAnimate,
    KTriangle,
    KBalloon,
    KOnePx
  }
}
</script>

<style lang="scss">
@import "./src/index.scss";
</style>
