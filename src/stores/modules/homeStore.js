import {defineStore} from "pinia";
import {getHotSuggestsData} from "@/services/modules/home";

export const useHomeStore = defineStore('homeStore',{
  state: () => ({
    hotSuggests: []
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    }
  }
})
