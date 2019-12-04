<template>
  <div>
    <k-icon></k-icon>
    <k-button></k-button>
    <k-input></k-input>
    <k-balloon></k-balloon>
    <k-one-px></k-one-px>
    <k-triangle></k-triangle>
    <!-- <k-loading></k-loading> -->
    <k-process></k-process>
    <k-animate></k-animate>
    <k-ellipsis />
  </div>
</template>

<script>
import KIcon from "./components/KIcon";
import KButton from "./components/KButton";
import KInput from "./components/Kinput";
// import KLoading from "./components/KLoading";
import KProcess from "./components/KProcess";
import KAnimate from "./components/KAnimate";
import KTriangle from "./components/KTriangle";
import KBalloon from "./components/KBalloon";
import KOnePx from "./components/KOnePx";
import KEllipsis from "./components/KEllipsis";

export default {
  components: {
    KIcon,
    KButton,
    KInput,
    // KLoading,
    KProcess,
    KAnimate,
    KTriangle,
    KBalloon,
    KOnePx,
    KEllipsis
  }
};
</script>

<style lang="less">
@import "../less/index.less";
</style>
