import {defineStore} from "pinia";
import {getCategoriesData, getHotSuggestsData, getHouseListData} from "@/services/modules/home";

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getCategoriesData();
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHouseListData(this.currentPage);
      this.currentPage++
      this.houseList.push(...res.data)
    }
  }
})
