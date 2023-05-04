<template>
  <HomeHeader/>
  <HomeBanner/>
  <HomeSearchBox/>
  <HomeSearchBar end-time="09.28" start-time="08.27" v-if="showHomeSearch"/>
  <HomeCategorize/>
  <HomeContent/>
  <Spacer/>
</template>

<script setup>
import HomeHeader from "@/views/Home/components/HomeHeader.vue";
import HomeSearchBox from "@/views/Home/components/HomeSearchBox.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeCategorize from "@/views/Home/components/HomeCategorize.vue";
import HomeContent from "@/views/Home/components/HomeContent.vue";
import HomeSearchBar from "@/views/Home/components/HomeSearchBar.vue";
import Spacer from "@/components/Spacer.vue";
import {useHomeStore} from "@/stores/modules/homeStore";
import {useScroll} from "@/hooks/useScroll";
import {computed, watch} from "vue";


const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();
const {scrollEnd, scrollTop} = useScroll();
watch(scrollEnd, (newVal) => {
  if (newVal) {
    homeStore.fetchHouseList().then(() => {
      scrollEnd.value = false;
    })
  }
});
const showHomeSearch = computed(() => {
  return scrollTop.value > 400
})

</script>

<style lang="less" scoped>

</style>
