<template>
  <div class="cite">
    <div class="cite-header">
      <van-search
          v-model="searchValue"
          show-action
          shape="round"
          placeholder="城市/区域/范围"
          onclick="onClick"
          @search="onSearch"
          @cancel="onCancel"
      />
      <van-tabs v-model:active="active" color="#ff9645">
        <template v-for="(item,key) in allCities">
          <van-tab :title="item.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="cite-content">
      <template v-for="(value,key) in allCities">
        <CityGroup v-show="key===active" :hotCite="value.hotCities" :cityGroupData="value.cities" />
      </template>

    </div>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import useCiteStore from "@/stores/modules/cityStore";
import {storeToRefs} from "pinia";
import CityGroup from "@/views/City/components/CityGroup.vue";


const searchValue = ref('');
const active = ref('cityGroup')

const citeStore = useCiteStore();
citeStore.fetchAllCitiesData();
const {allCities} = storeToRefs(citeStore)
const onSearch = () => {
  console.log(searchValue.value)
}
const onClick = () => {
  console.log(searchValue.value)
}

watch(active, value => {
  console.log(value)
})
const onCancel = () => {
  console.log('点击取消')
}


</script>

<style lang="less" scoped>
.cite {
&-header {
  position: relative;
  z-index: 5;
}
  &-content {
    height: calc(100vh - 98px);
    overflow: auto;
  }
}
</style>
