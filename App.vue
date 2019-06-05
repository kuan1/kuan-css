<template>
  <div>
    <k-icon></k-icon>
    <k-button></k-button>
    <k-input></k-input>
    <k-switch></k-switch>
    <k-triangle></k-triangle>
    <k-balloon></k-balloon>
    <k-loading></k-loading>
    <k-process></k-process>
    <k-animate></k-animate>
    <div class="test-item">
      <h2>一像素</h2>
      <div class="one-px"></div>
    </div>
  </div>
</template>

<script>
import KIcon from './src/KIcon'
import KButton from './src/KButton'
import KInput from './src/Kinput'
import KSwitch from './src/KSwitch'
import KLoading from './src/KLoading'
import KProcess from './src/KProcess'
import KAnimate from './src/KAnimate'
import KTriangle from './src/KTriangle'
import KBalloon from './src/KBalloon'

export default {
  components: {
    KIcon,
    KButton,
    KInput,
    KSwitch,
    KLoading,
    KProcess,
    KAnimate,
    KTriangle,
    KBalloon
  }
}
</script>

<style lang="scss">
@import './src/styles/index.scss';

.one-px {
  height: 50px;
  @include one-px(top, red);
}
</style>
