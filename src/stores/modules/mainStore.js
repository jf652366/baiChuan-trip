import {defineStore} from "pinia";

const startDate = new Date();
const endDate = new Date().setDate(new Date().getDate() + 1)
export const useMainStore = defineStore('mainStore', {
  state: () => ({
    startDate: startDate,
    endDate: endDate,
    isLoading: false
  }),
  actions: {
    setMainDate(startDate, endDate) {
      console.log(startDate.getTime(), endDate)
      this.startDate = startDate.getTime();
      this.endDate = endDate.getTime();
    },
    setLoading() {
      this.isLoading = !this.isLoading
    }
  }
})
