<template>
  <div class="home-search-box">
    <div class="home-position search-box-container">
      <div class="home-position-cite" @click="getCiteName">
        {{ currentCity.cityName }}
      </div>
      <div class="home-position-select-cite">
        <span class="home-position-select-cite-content">我的位置</span>
        <img :src="HOME_POSITION_MY_POSITION_IMG" alt="">
      </div>
    </div>
    <div class="home-data search-box-container" @click="show=true">
      <div class="home-data-left">
        <div class="tip">入住</div>
        <div class="data">{{ startDate }}</div>
      </div>
      <div class="home-data-center">共{{ timeLong }}晚</div>
      <div class="home-data-right">
        <div class="tip">离店</div>
        <div class="data">{{ endDate }}</div>
      </div>
    </div>
    <div class="home-filter search-box-container">
      <div
          class="home-filter-left"
          @click="onFilterClick('请选择价格区间')"
      >
        {{ filterPrickData }} <span v-show="filterPrickData!==initFilterValue.prickData">元</span>
      </div>
      <img @click="homeFilterReload" class="home-filter-reload-img" :src="HOME_RELOAD_IMG" alt="">
      <div
          class="home-filter-right"
          @click="onFilterClick('请选择入住人数')"
      >
        {{ filterPersonData }} <span v-show="filterPersonData!==initFilterValue.personData">人</span>
      </div>
    </div>
    <div class="search-box-container search-container">
    关键字/位置/民宿名
    </div>
    <!-- 日历选择组件 -->
    <van-calendar :formatter="formatter" @close="show = false" :show="show" type="range" @confirm="onConfirm"/>

    <!-- 筛选项选择组件 -->
    <van-popup :show="showFilterPicker" round position="bottom">
      <van-picker
          @cancel="showFilterPicker = false"
          :title="shouFilterTitle"
          :columns="filterColumns"
          @confirm="onFilterConfirm"
      />
    </van-popup>


  </div>

</template>

<script setup>
import {
  HOME_PAGE_FILTER_PERSON_COLUMNS,
  HOME_PAGE_FILTER_PRICE_COLUMNS,
  HOME_POSITION_MY_POSITION_IMG, HOME_RELOAD_IMG
} from "@/assets/data";
import {useRouter} from "vue-router";
import useCiteStore from "@/stores/modules/cityStore";
import {storeToRefs} from "pinia";
import dayjs, {Dayjs} from "dayjs";
import {computed, ref} from "vue";

const router = useRouter();
const cityStore = useCiteStore()
const {currentCity} = storeToRefs(cityStore)
const getCiteName = () => {
  router.push('/cite')
}

/* ---------------------------- [ 日期范围处理 ] ---------------------------- */

const newDate = new Date();
const startDate = ref(dayjs().format('MM月DD日'));
const timeLong = ref(1);
const endDate = ref(dayjs(newDate.setDate(newDate.getDate() + 1)).format('MM月DD日'));
const show = ref(false);
const onConfirm = (values) => {
  const [start, end] = values;
  show.value = false;
  startDate.value = dayjs(start).format('MM月DD日');
  endDate.value = dayjs(end).format('MM月DD日');
  timeLong.value = dayjs(end).diff(dayjs(start), 'day');
};

const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day;
}
/* ---------------------------- [ 范围选择处理逻辑 ] ---------------------------- */
const initFilterValue = {
  prickData: '价格不限',
  personData: '人数不限',
  filterTitle: '请选择价格区间'
}
const showFilterPicker = ref(false);
const filterPrickData = ref(initFilterValue.prickData);
const filterPersonData = ref(initFilterValue.personData);
const shouFilterTitle = ref(initFilterValue.filterTitle)
const homeFilterReload = () => {
  const {prickData, personData, filterTitle} = initFilterValue
  filterPrickData.value = prickData
  filterPersonData.value = personData
  shouFilterTitle.value = filterTitle
}
const onFilterClick = (title = '') => {
  shouFilterTitle.value = title;
  showFilterPicker.value = true;
}
const filterColumns = computed(() => {
  if (shouFilterTitle.value === '请选择价格区间') {
    return HOME_PAGE_FILTER_PRICE_COLUMNS;
  }
  if (shouFilterTitle.value === '请选择入住人数') {
    return HOME_PAGE_FILTER_PERSON_COLUMNS;
  }
})
const onFilterConfirm = (value) => {
  const dataValue = value.selectedValues[0];
  showFilterPicker.value = false
  if (shouFilterTitle.value === '请选择价格区间') {
    filterPrickData.value = dataValue;
  }
  if (shouFilterTitle.value === '请选择入住人数') {
    filterPersonData.value = dataValue;
  }

}
</script>

<style lang="less" scoped>
.home-search-box {
  --van-calendar-range-edge-background: var(--primary-color);
  --van-button-primary-background: var(--primary-color);
  --van-button-primary-border-color: var(--primary-color);
  --van-calendar-range-middle-color: var(--primary-color);

  .search-box-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    margin: 0 20px;
    border-bottom: 1px solid #f3f3f3;
    user-select: none;
  }

  .home-position {

    &-cite {
      max-width: 250px;
      font-size: 15px;
      color: #333;
      overflow-y: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }

    &-select-cite {
      display: flex;
      align-items: center;
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

  .home-data {
    .tip {
      text-align: left;
      line-height: 16px;
      color: #999;
      font-size: 10px;
    }

    .data {
      margin-top: 2px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      font-size: 15px;
      color: #333;
    }

    &-center {
      font-size: 12px;
      color: #666;
    }

    &-right {
      font-size: 15px;
      min-width: 30%;
    }
  }

  .home-filter {
    color: #999;
    font-size: 14px;

    &-right {
      min-width: 30%;
    }

    &-action-content {
      padding: 50px 30px;
    }

    &-reload-img {
      width: 18px;
      height: 18px;
    }
  }
  .search-container {
    font-size: 14px;
    color: #999999;
  }
}

</style>
