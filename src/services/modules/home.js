import bcRequest from "@/services/request";

export const getHotSuggestsData=()=>{
  return bcRequest.get( {
    url:'/home/hotSuggests'
  })
}
export const getCategoriesData=()=>{
  return bcRequest.get({
    url:'/home/categories'
  })
}
