<template>
  <header class="home-header">
    <img class="home-header-logo" :src="HOME_HEADER_LOGO_IMG" alt="">
    <img class="home-header-right" :src="HOME_HEADER_RIGHT_IMG" alt="">
  </header>
</template>

<script setup>
import {
  HOME_HEADER_LOGO_IMG,
  HOME_HEADER_RIGHT_IMG
} from "@/assets/data";
</script>

<style lang="less" scoped>
.home-header {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid #f3f3f3;
  background: #FFF;

  &-logo {
    margin: 0 auto;
    width: 85px;
    height: 25px;
  }

  &-right {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 20px;
    height: 15px;
    margin-right: 5%;
  }
}
</style>
