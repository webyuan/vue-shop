
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


let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router,

})

Vue.use({
  vm
})
