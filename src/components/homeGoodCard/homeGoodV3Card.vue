<template>
  <div>
    <div class="home-good-v3">
      <img class="home-good-img" :src="data.image.url||''" alt="">
      <div class="location">
        <img class="location-img" :src='PUB_LOCATION_IMG'>
        {{ data.location  }}
      </div>
      <div class="house-name leave-out-2">{{ data.houseName  }}</div>
      <div class="summary-text">{{ data.summaryText  }}</div>
      <div class="home-good-v3-bottom">
        <span class="final-price">¥{{ data.finalPrice  }}</span>
        <span class="product-price">¥{{ data.productPrice  }}</span>
        <span class="text" :style="tipStyle">{{ priceTipBadge?.text  }}</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import {computed} from "vue";
import {PUB_LOCATION_IMG} from '@/assets/data';

const datas = defineProps({
  data: {
    default: {},
    type: Object
  }
})

const priceTipBadge = computed(() => {
  return datas.data.priceTipBadge;
})

const tipStyle = computed(() => {
  const style = datas.data.priceTipBadge;
  if (style) {
    return {
      color: style.color,
      background: `linear-gradient(to left,${style.gradient.startColor }, #${style.gradient.endColor })`,
      borderRadius: '12px',
      padding: '0px 4px'
    }
  } else {
    return {}
  }
})
</script>

<style lang="less" scoped>
.home-good-img {
  width: 160px;
  height: 145px;
  border-radius: 10px;
}

.home-good-v3 {
  width: 160px;
  font-size: 10px;
  margin-top: 10px;
  background: #FFF;
  border-radius: 10px;

  &-bottom {
    margin-top: 5px;
  }
}

.location {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 11px;
  line-height: 12px;
  color: #999;

  &-img {
    width: 10px;
    height: 10px;
  }
}

.house-name {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
  color: #333;
}

.summary-text {
  margin-top: 5px;
  margin-left: 5px;
  font-size: 10px;
  color: #666;
}

.final-price {
  margin-left: 5px;
  font-size: 14px;
  color: #ff9645;
}

.product-price {
  margin-left: 4px;
  color: #999;
  text-decoration: line-through;
}

.text {
  margin-left: 4px;
  line-height: 10px;
  text-align: center;
  font-size: 10px;
}
</style>
