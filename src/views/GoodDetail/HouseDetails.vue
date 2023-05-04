<template>
  <div>
    <DetailsNavBar/>
    <template v-if="mainPart">
      <TabControl class="tabs" v-show="showTabControl" :titles="['we','you']"/>
      <DetailsSwipe :swipeData="mainPart.topModule.housePicture.housePics"/>
      <DetailsInfo :detailsData="mainPart.topModule"/>
      <DetailEquipment/>
      <DetailsLandlord/>
      <DetailsAppointment/>
      <DetailMap/>
    </template>

  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import useDetailsStore from "@/stores/modules/detailsStore";
import {storeToRefs} from "pinia";
import DetailsSwipe from "@/views/GoodDetail/components/DetailsSwipe.vue";
import DetailsNavBar from "@/views/GoodDetail/components/DetailsNavBar.vue";
import DetailsInfo from "@/views/GoodDetail/components/DetailsInfo.vue";
import DetailMap from "@/views/GoodDetail/components/DetailMap.vue";
import DetailEquipment from "@/views/GoodDetail/components/DeatilEquipment.vue";
import DetailsAppointment from "@/views/GoodDetail/components/DetailsAppointment.vue";
import DetailsLandlord from "@/views/GoodDetail/components/DetailsLandlord.vue";
import TabControl from "@/components/TabControl.vue";
import {useScroll} from "@/hooks/useScroll";

const route = useRoute();

const houseId = route.params.id;
const detailsStore = useDetailsStore();
detailsStore.getHouseDetails(houseId);
const {details} = storeToRefs(detailsStore)
const mainPart = computed(() => details.value.mainPart);
const {scrollTop}=useScroll();
console.log('scrollTop',scrollTop.value)
const showTabControl=computed(()=>{
  return scrollTop.value>300
})
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
