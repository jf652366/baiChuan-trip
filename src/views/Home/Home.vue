<template>
  <div class="home">
    <HomeHeader/>
    <HomeBanner/>
    <HomePosition/>
  </div>
</template>

<script setup>
import HomeHeader from "@/views/Home/components/HomeHeader.vue";
import HomePosition from "@/views/Home/components/HomeSearchBox.vue";
import HomeBanner from "@/views/Home/components/HomeBanner.vue";
import bcRequest from "@/services/request";

bcRequest.get({
  url:'/home/hotSuggests'
}).then(res=>{
  console.log(res.data)
})
</script>

<style lang="less" scoped>

</style>
