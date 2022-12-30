<template>
  <div class="home-search-box">
    <div class="home-position">
      <div class="home-position-cite" @click="getCiteName">
        {{ position }}
      </div>
      <div class="home-position-select-cite">
        <span class="home-position-select-cite-content">我的位置</span>
        <img :src="HOME_POSITION_MY_POSITION_IMG" alt="">
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";
import {HOME_POSITION_MY_POSITION_IMG} from "@/assets/data";
import {useRouter} from "vue-router";

const position = ref('北京');
const router=useRouter();
const getCiteName=()=>{
  router.push('/cite')
}
</script>

<style lang="less" scoped>
.home-search-box {
  .home-position {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #f3f3f3;
    user-select: none;

    &-cite {
      max-width: 250px;
      margin-left: 20px;
      font-size: 15px;
      color: #333;
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }

    &-select-cite {
      display: flex;
      align-items: center;
      padding-right: 20px;
      font-size: 12px;
      color: #666;

      &-content {
        margin-right: 8px;
      }

      img {
        width: 18px;
        height: 18px;
        margin-bottom: 3px;
      }
    }
  }
}

</style>
