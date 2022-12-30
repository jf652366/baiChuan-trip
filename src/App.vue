<template>
  <div class="app">
    <router-view/>
    <TabBar v-if="!route?.meta?.showTabBar"/>

  </div>
</template>
<script setup>

import TabBar from "@/components/TabBar.vue";
import {useRoute} from "vue-router";

const route = useRoute();

</script>
<style lang="less" scoped>

</style>
