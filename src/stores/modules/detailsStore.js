import {defineStore} from "pinia";
import {getCityAll} from "@/services";

const useDetailsStore = defineStore('detailsStore', {
  state: () => ({
    details:{},
  }),
  actions: {
    async getHouseDetails(houseId) {
      const res = await getCityAll();
      this.allCities = res.data;
    }
  }
})
export default useDetailsStore;
