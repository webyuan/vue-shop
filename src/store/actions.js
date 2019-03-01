
/*
* 通过mutations间接更新state状态
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodsList,
  reqShops
} from '../api'
export default {
  //获取地址
   async getAddress({commit,state}){
     //发送异步请求
     const geohash=state.longitude+','+state.latitude;
     const result=await reqAddress(geohash);
     if (result.code===0){
       const address=result.data;
       commit(RECEIVE_ADDRESS,{address});
     }
   },
   //获取食品列表
  async getCategorys({ commit }){
     const result=await reqFoodsList();
     if (result.code===0){
       const categorys=result.data;
       commit(RECEIVE_CATEGORYS,{categorys})
     }
  },
  //获取商铺
  async getShops({commit,state}){
     const {longitude,latitude}=state;
     const result=await reqShops(latitude,longitude);
     if (result.code===0){
       const shops=result.data
       commit(RECEIVE_SHOPS,{shops})
     }
  }
}
