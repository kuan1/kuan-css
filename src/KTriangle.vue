<template>
  <div class="test-item">
    <h2>三角形</h2>
    <div>
      <div class="triangle">
        <div class="arrow-right">右侧</div>
        <div class="arrow-left">左侧</div>
        <div class="arrow-top">上侧</div>
        <div class="arrow-bottom">下侧</div>
        <div class="triangle-right"></div>
        <div class="triangle-left"></div>
        <div class="triangle-top"></div>
        <div class="triangle-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import './styles/mixins/triangle.scss';
.triangle {
  display: flex;
  align-items: center;
  & > div {
    margin-right: 10px;
  }
}
</style>
