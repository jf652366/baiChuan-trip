<template>
  <div class="tab-bar">
    <template v-for="(item,index) in TAB_BAR_DATA " :key="item.text">
      <div :class='{"tab-bar-item" :true,
        "tab-bar-item-active":activeIndex === index
        }' @click="goPage(item.path,index)">
        <img :src='activeIndex === index ? item.imageActive : item.image' :alt="item.text">
        <p>{{ item.text }}</p>
      </div>
    </template>
  </div>
</template>

<script setup>

import {TAB_BAR_DATA} from "@/assets/data";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
let activeIndex = ref(0);

const goPage = (path = '', index) => {
  activeIndex.value = index;
  router.push(path);
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex: 1;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  border-top: 1px solid #f3f3f3;
background: #FFF;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
  }

  &-item-active {
    color: var(--primary-color);
  }

  &-item img {
    width: 36px;
    height: 28px;
    margin-bottom: 1px;
  }
}
</style>
