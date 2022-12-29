<template>
  <div class="home-banner">
    <img :src="HOME_BANNER_IMG" alt="">
  </div>
</template>

<script setup>
import {HOME_BANNER_IMG} from "@/assets/data";


</script>

<style lang="less" scoped>
.home-banner {
  height: 125px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
