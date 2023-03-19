<template>
  <div>
    <ModuleCard title="热门精选">
      <div class="content-list">
        <template v-for="(item,index) in houseList" :key="item.data.houseId">
          <template v-if="item.discoveryContentType === 9">
            <HomeGoodV9Card @click="itemClick(item.data)" :data="item.data"/>
          </template>
          <template v-if="item.discoveryContentType === 3">
            <HomeGoodV3Card @click="itemClick(item.data)" :data="item.data"/>
          </template>
        </template>
      </div>
    </ModuleCard>
  </div>

</template>

<script setup>

import ModuleCard from "@/components/ModuleCard.vue";
import {useHomeStore} from "@/stores/modules/homeStore";
import {storeToRefs} from "pinia";
import HomeGoodV9Card from "@/components/homeGoodCard/HomeGoodV9Card.vue";
import HomeGoodV3Card from "@/components/homeGoodCard/homeGoodV3Card.vue";
import {useRouter} from "vue-router";

const homeStore = useHomeStore();
const {houseList} = storeToRefs(homeStore)
const router = useRouter()
const itemClick = (item) => {
  router.push('/goodDetail/' + item.houseId)
}
</script>

<style lang="less" scoped>
.content-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-top: -10px;
}
</style>
