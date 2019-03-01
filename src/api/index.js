/*
* 包含N个接口的请求某块
* 函数的返回值：promise
* */

import ajax from './ajax'
const url='/api'
//1  根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax(`${url}/position/${geohash}`);

//获取食品分类列表
export const reqFoodsList=()=>ajax(url+'/index_category');

//3. 根据经纬度回去商铺列表
export const reqShops=(longitude,latitude)=>ajax(url+'/shops',{latitude,longitude})
