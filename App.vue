<template>
  <div>
    <k-icon></k-icon>
    <k-button></k-button>
    <k-input></k-input>
    <k-switch></k-switch>
    <k-loading></k-loading>
    <k-process></k-process>
    <k-animate></k-animate>
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

export default {
  components: {
    KIcon,
    KButton,
    KInput,
    KSwitch,
    KLoading,
    KProcess,
    KAnimate
  }
}
</script>

<style lang="scss">
@import "./src/styles/index.scss";
.test-container {
  max-width: 90%;
  width: 900px;
  margin: 10px auto;
}

.test-container .title {
  padding-bottom: 20px;
  text-align: center;
}

.test-container h1,
.test-container h2 {
  line-height: 2;
}

.test-container .test-item {
  border-radius: 5px;
  margin: 20px 0;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.08);
  word-break: break-all;
}

.test-container .test-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.test-container .ball {
  height: 50px;
  width: 50px;
  background: #ccc;
  border-radius: 50%;
  margin: 20px;
}

.loading-container {
  display: flex;
  align-items: center;
}

.loading-container > div {
  margin: 0 30px;
}
</style>
