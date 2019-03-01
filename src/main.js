
/*
import Vue from "vue";
import App from "./App.vue";
new Vue({
  el:"#app",
  render:c=>c(App)

})
*/
import Vue from 'vue'
import App from './App';

//引入路由
import router from './router/index.js'
//引入store
import store from './store'

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})

Vue.use({
  vm
})
