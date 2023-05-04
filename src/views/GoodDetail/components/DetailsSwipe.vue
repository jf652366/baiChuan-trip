<template>
  <van-swipe class="swipe-list" :autoplay="1000" :show-indicators="false" indicator-color="white">
    <template v-for="(data,index) in swipeData">
      <van-swipe-item class="swipe-item">
        <img :src="data.url" alt="">
      </van-swipe-item>
    </template>
    <template #indicator="{ active, total }">
      <div class="details-swipe-indicator">
        <template v-for="( value,key,index) in swipeGroup" :key="index">
          <span :class="{
            'title-item':true,
            active:`${swipeData[active]?.enumPictureCategory}`===key
          }">
            <span>  {{ formatTitle(value[0].title) }}</span>
            <span v-if="`${swipeData[active]?.enumPictureCategory}`===key">
              {{ getCategoryIndex(swipeData[active]) }}  / {{value.length}}
            </span>
          </span>
        </template>
      </div>
    </template>
  </van-swipe>
</template>

<script setup>
import {storeToRefs} from "pinia";
import useDetailsStore from "@/stores/modules/detailsStore";

const detailsStore = useDetailsStore();
const {details} = storeToRefs(detailsStore)
const props = defineProps({
  swipeData: {
    type: Array,
    default: []
  }
})

const swipeGroup = {};
props.swipeData.forEach(item => {
  let valueArray = swipeGroup[item.enumPictureCategory];
  if (!valueArray) {
    valueArray = [];
    swipeGroup[item.enumPictureCategory] = valueArray;
  }
  valueArray.push(item)
})

const titleReg = /【(.*?)】/;
const formatTitle = (title) => {
  if (!title) return ''
  const result = titleReg.exec(title);
  if (result[1]) return result[1]
  return ''
}

const getCategoryIndex=(item)=>{
  const valueArray=swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data=>data===item)+1
}
</script>

<style lang="less" scoped>
.swipe-list {
  .swipe-item {
    img {
      width: 100%;
    }
  }

  .details-swipe-indicator {
    position: absolute;
    bottom: 10px;
    right: 30px;
    padding: 4px;
    border-radius: 4px;
    font-size: 14px;
    color: #FFF;
    background: #333;
  }
}

.title-item {
  margin: 2px 4px;

  &.active {
    background: #FFF;
    color: #000;
    border-radius: 4px;
    padding: 0 4px;
  }
}
</style>
