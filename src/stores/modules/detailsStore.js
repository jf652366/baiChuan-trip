import {defineStore} from "pinia";
import {getHouseDetails} from "@/services";

const useDetailsStore = defineStore('detailsStore', {
  state: () => ({
    details: {},
  }),
  actions: {
    async getHouseDetails(houseId) {
      const res = await getHouseDetails(houseId);
      this.details = res.data;
    }
  }
})
export default useDetailsStore;
