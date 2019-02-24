//路由接口
import Vue from 'vue';
import VueRouter from 'vue-router';

//引入组件
import home from '../pages/home/home.vue';
import order from '../pages/order/order.vue';
import search from '../pages/search/search.vue';
import profile from '../pages/profile/profile.vue';
import login    from  '../pages/login/login.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/login',
      component:login
    },
  ]
})
