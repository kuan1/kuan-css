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
import KIcon from './src/KIcon'
import KButton from './src/KButton'
import KInput from './src/Kinput'
import KLoading from './src/KLoading'
import KProcess from './src/KProcess'
import KAnimate from './src/KAnimate'
import KTriangle from './src/KTriangle'
import KBalloon from './src/KBalloon'
import KOnePx from './src/KOnePx'

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
@import './src/styles/index.scss';
</style>
