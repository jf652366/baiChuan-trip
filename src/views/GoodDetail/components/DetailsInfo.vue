<template>
  <div>
    <div>{{ detailsData.houseName }}</div>
    <div class="tag-list">
      <template v-for="(item,index) in detailsData.houseTags" :key="index">
        <span v-if="item.tagText" class="tag-item"  :style="{
          color:item.tagText.color,
          border:item.tagText.border,
          background:item.tagText.background.color
        }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
  </div>

</template>

<script setup>

defineProps({
  detailsData: {
    default: {},
    type: Object
  }
})
</script>

<style lang="less" scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  .tag-item {
    margin: 4px 2px;
    padding: 2px 5px;
    border-radius: 6px;
    font-size: 12px;
  }
}
</style>
