<template>
  <div>
    <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
const route =useRoute()
const router=useRouter()
const goodId=ref(route.params.id)
const onClickLeft=()=>{
  console.log('onClickLeft',goodId.value)
  router.back()
}
</script>

<style lang="less" scoped>

</style>
