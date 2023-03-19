<template>
  <div class="home-search-bar">
    <div class="search-left">
      <div>
        <div class="item start">
          <div class="name">住</div>
          <div class="date">{{ startTime }}</div>
        </div>
        <div class="item end">
          <div class="name">离</div>
          <div class="date">{{ endTime }}</div>
        </div>
      </div>
      <div class="key-word">
        关键字/位置/名宿
      </div>
    </div>

    <div class="search-end">
      <img class="search-img" :src="HOME_SEARCH_IMG" alt="">
    </div>
  </div>
</template>

<script setup>

import {HOME_SEARCH_IMG} from "@/assets/data";
import {useMainStore} from "@/stores/modules/mainStore";
import {storeToRefs} from "pinia";
import dayjs from "dayjs";
import {computed} from "vue";

const mainStore = useMainStore();
const {startDate, endDate,} = storeToRefs(mainStore)
const startTime = computed(() => dayjs(startDate.value).format('MM.DD'))
const endTime = computed(() => dayjs(endDate.value).format('MM.DD'))
</script>

<style lang="less" scoped>
.home-search-bar {
  position: fixed;
  top: 0;
  z-index: 10;
  height: 50px;
  width: 100vw;
  padding: 5px 20px 5px;
  background: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;

  .item {
    display: flex;
  }

  .end {
    margin-top: 4px;
  }

  .search-left {
    display: flex;
    align-items: center;
  }

  .key-word {
    margin-left: 10px;
  }

  .search-img {
    width: 20px;
    height: 20px;
  }
}
</style>
