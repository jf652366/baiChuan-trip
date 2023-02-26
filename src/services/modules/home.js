import bcRequest from "@/services/request";

export const getHotSuggestsData=()=>{
  return bcRequest.get( {
    url:'/home/hotSuggests'
  })
}
