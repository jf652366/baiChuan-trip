<template>
  <div class="module-card">
    <div class="module-card__title">{{ title }}</div>
    <div class="">
      <slot/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    default: '',
    type: String
  },
})
</script>

<style lang="less" scoped>
.module-card {
  &__title {
    padding: 0 16px;
    font-family: PingFangSC-Medium;
    height: 48px;
    line-height: 48px;
    text-align: start;
    font-size: 18px;
    color: #333;vue
    background: #FFF;
  }
}
</style>
