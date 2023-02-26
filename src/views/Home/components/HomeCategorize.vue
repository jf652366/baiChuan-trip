<template>
  <div class="home-categorize">
    <template v-for="item in categories">
      <div class="home-categorize-item">
        <img :src="item.pictureUrl" alt="">

        <div>
           {{item.title}}
        </div>
      </div>
    </template>
  </div>

</template>

<script setup>
import {useHomeStore} from "@/stores/modules/homeStore";
import {storeToRefs} from "pinia";

const homeStore=useHomeStore();
const {categories}=storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home-categorize {
  display: flex;
  overflow: scroll;
  &-item {
    flex-shrink: 0;
    margin: 0 10px;
    text-align: center;
    img {
      width: 38px;
      height: 38px;
    }
    div {
      margin-top: 4px;
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
