import axios from 'axios'
import {BASE_URL, TIMEOUT} from "@/services/request/config";
import {useMainStore} from "@/stores/modules/mainStore";

const mainStore = useMainStore();

class BCRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use((config) => {
      mainStore.setLoading()
      return config
    }, (err) => {
      return err
    })
    this.instance.interceptors.response.use((config) => {
      mainStore.setLoading()
      return config
    }, (err) => {
      mainStore.setLoading()
      return err
    })
  }


  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }


  get(config) {
    return this.request({...config, method: "get"})
  }


  post(config) {
    return this.request({...config, method: "post"})
  }
}

const bcRequest = new BCRequest(BASE_URL, TIMEOUT)
export default bcRequest;
