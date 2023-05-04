<template>

  <router-view/>
  <TabBar v-if="!route?.meta?.showTabBar"/>
  <loading/>
</template>
<script setup>

import TabBar from "@/components/TabBar.vue";
import {useRoute} from "vue-router";
import Loading from "@/components/Loading.vue";

const route = useRoute();
</script>
<style lang="less" scoped>
.app {
  padding-bottom: 50px;
  background: #f8f8f8;
}
</style>
