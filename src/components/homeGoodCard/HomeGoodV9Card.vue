<template>
  <div>
    <div class="home-good-v9">
      <img class="home-good-v9-img" :src="data.image.url" alt="">
      <div class="content">
        <div class="summary-text">
          {{ data.summaryText }}
        </div>
        <div class="home-name leave-out-2">
          {{ data.houseName }}
        </div>
        <div class="bottom">
          <van-rate
              :size="8"
              color="#FFF"
              void-icon="star"
              :touchable="false"
              readonly
              :model-value="Number(data.commentScore)"
              allow-half/>
          <div class="home-good-v9-price">
            {{ data.finalPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    default: {},
    type: Object
  }
})

</script>

<style lang="less" scoped>

.home-good-v9 {
  position: relative;
  font-size: 8px;
  width: 160px;
  margin-top: 10px;
  color: #FFF;
  background: #FFF;
  border-radius: 10px;
  &-img {
    width: 160px;
    height: 240px;
    border-radius: 10px;
  }
}

.content {
  position: absolute;
  bottom: 0;
  padding: 0 5px 6px;
}

.home-name {
  margin-top: 4px;
}

.bottom {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
