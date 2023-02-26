<template>
  <div class="home">
    <HomeHeader/>
    <HomeBanner/>
    <HomeSearchBox :hotSuggests="hotSuggests"/>
  </div>
</template>

<script setup>
import HomeHeader from "@/views/Home/components/HomeHeader.vue";
import HomeSearchBox from "@/views/Home/components/HomeSearchBox.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import {useHomeStore} from "@/stores/modules/homeStore";
const homeStore=useHomeStore();
homeStore.fetchHotSuggests()
</script>

<style lang="less" scoped>

</style>
