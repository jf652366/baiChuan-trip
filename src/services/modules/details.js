import bcRequest from "@/services/request";

export const getHouseDetails=(houseId)=>{
  return bcRequest.get( {
    url:'/home/hotSuggests'
  })
}
