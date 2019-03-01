<template>
    <div>
      <router-view></router-view>
      <footera v-show="$route.meta.showFooter"></footera>
    </div>
</template>

<script>
  //引入组件
  import footera from './components/tabbar/taber.vue';
  import { reqFoodsList } from './api/index.js'
export default {
  data () {
    return {}
  },
  components:{
    footera
  },
  mounted(){
   this.$store.dispatch('getAddress')
  }
}
</script>

<style>

</style>
