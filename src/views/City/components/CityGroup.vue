<template>
  <van-index-bar :index-list="indexList" :sticky="false" >
    <van-index-anchor index="#" >热门</van-index-anchor>
    <div class="cite-hot">
      <template v-for="city in hotCite">
        <div class="cite-hot-item" @click="citeClick(city)">{{city.cityName}}</div>
      </template>
    </div>

    <template v-for="item in cityGroupData">
      <van-index-anchor :index="item.group" >{{item.group}}</van-index-anchor>
      <template v-for="city in item.cities">
        <van-cell @click="citeClick(city)" :title="city.cityName" />
      </template>
    </template>

  </van-index-bar>


</template>

<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";
import useCiteStore from "@/stores/modules/cityStore";

const props=defineProps({
  active:{
    default:'',
    type:String
  },
  cityGroupData:{
    default:[],
    type:Object
  },
  hotCite:{
    default:[],
    type:Object
  }
})

const indexList=computed(()=>{
  const list= props.cityGroupData.map(item=>item.group)
  list.unshift('#')
 return list
})
const router=useRouter()
const cityStore=useCiteStore();
const citeClick=(cite)=>{
  cityStore.currentCity=cite
  router.back()
}
</script>

<style lang="less" scoped>
.cite-hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px 25px 10px 10px;

  &-item {
    width: 70px;
    font-size: 12px;
    text-align: center;
    color: #666;
   background: #FDE6E0;
    border-radius: 5px;
    padding: 4px 6px;
    margin: 6px 0;
  }
}
</style>
