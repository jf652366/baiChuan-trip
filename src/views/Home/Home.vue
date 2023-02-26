<template>
  <div class="home">
    <HomeHeader/>
    <HomeBanner/>
    <HomeSearchBox />
    <HomeCategorize/>
  </div>
</template>

<script setup>
import HomeHeader from "@/views/Home/components/HomeHeader.vue";
import HomeSearchBox from "@/views/Home/components/HomeSearchBox.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import HomeCategorize from "@/views/Home/components/HomeCategorize.vue";
import {useHomeStore} from "@/stores/modules/homeStore";

const homeStore = useHomeStore();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
</script>

<style lang="less" scoped>

</style>
