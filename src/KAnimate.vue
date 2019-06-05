<template>
  <div class="test-item">
    <h2>动画</h2>
    <div class="flex flex-wrap">
      <div class="ball animated fadeIn"></div>
      <div class="ball animated fadeInDown"></div>
      <div class="ball animated fadeInUp"></div>
      <div class="ball animated bounce"></div>
      <div class="ball animated pulse infinite"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.test-container .ball {
  height: 50px;
  width: 50px;
  background: #ccc;
  border-radius: 50%;
  margin: 20px;
}
</style>
