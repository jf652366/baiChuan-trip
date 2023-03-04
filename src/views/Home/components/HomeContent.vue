<template>
  <div>
    <ModuleCard title="热门精选">
      <div class="content-list">
        <template v-for="(item,index) in houseList" :key="item.data.houseId">
          <h2>
            {{item.data.houseName}}
          </h2>
        </template>
      </div>
    </ModuleCard>
  </div>

</template>

<script setup>

import ModuleCard from "@/components/ModuleCard.vue";
import {useHomeStore} from "@/stores/modules/homeStore";
import {storeToRefs} from "pinia";
const homeStore=useHomeStore();
const {houseList}=storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.content-list {

}
</style>
