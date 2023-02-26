import bcRequest from "@/services/request";

export const getCityAll=()=>{
   return bcRequest.get( {
     url:'/city/all'
   })
}
