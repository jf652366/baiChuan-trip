<template>
  <div class="loading" @click="loadingClick" v-if="isLoading">
    <div class="loading-bg-img">
      <img class="loading-img" :src="PUB_LOADING_IMG" alt="">
    </div>
  </div>
</template>

<script setup>
import {useMainStore} from "@/stores/modules/mainStore";
import {storeToRefs} from "pinia";
import {PUB_LOADING_IMG,PUB_LOADING_BAG_IMG} from "@/assets/data";

const mainStore = useMainStore()
const {isLoading} = storeToRefs(mainStore);

const loadingClick=()=>{
  mainStore.setLoading()
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .2);
}
.loading-bg-img {
  height: 170px;
  width: 170px;
  background: url( "https://jinfengdeyitian.top/picgo/trip/loading-bg.png");
  background-size: 100% 100%;
}
.loading-img {
  width: 70%;
  height: 70%;
  margin-left: 15%;
  margin-top: 10%;
}
</style>
