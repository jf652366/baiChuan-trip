import {defineStore} from "pinia";
import {getCategoriesData, getHotSuggestsData} from "@/services/modules/home";

export const useHomeStore = defineStore('homeStore',{
  state: () => ({
    hotSuggests: [],
    categories:[]
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    },
    async fetchCategories(){
      const res=await getCategoriesData();
      this.categories=res.data
    }
  }
})
