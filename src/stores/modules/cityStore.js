import {defineStore} from "pinia";
import {getCityAll} from "@/services";

const useCiteStore = defineStore('citeStore', {
  state: () => ({
    allCities:{},
    currentCity:{cityName:'北京'}
  }),
  actions: {
    async fetchAllCitiesData(){
       const res = await getCityAll();
      this.allCities = res.data;
    }
  }
})
export default useCiteStore;
