<template>
  <div class="home">
    <HomeHeader/>
    <HomeBanner/>
    <HomeSearchBox/>
    <HomeCategorize/>
    <HomeContent/>

  </div>
</template>

<script setup>
import HomeHeader from "@/views/Home/components/HomeHeader.vue";
import HomeSearchBox from "@/views/Home/components/HomeSearchBox.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeCategorize from "@/views/Home/components/HomeCategorize.vue";
import HomeContent from "@/views/Home/components/HomeContent.vue";
import {useHomeStore} from "@/stores/modules/homeStore";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();
</script>

<style lang="less" scoped>

</style>
