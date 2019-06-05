<template>
  <div class="test-item">
    <h2>加载中</h2>
    <div class="loading-container flex-wrap">
      <div class="k-pacman">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="k-line-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="k-line-spinning">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.loading-container {
  display: flex;
  align-items: center;
}

.loading-container > div {
  margin: 0 30px;
}
</style>
