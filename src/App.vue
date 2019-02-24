<template>
    <div>
      <router-view></router-view>
      <footera v-show="$route.meta.showFooter"></footera>
    </div>
</template>

<script>
  //引入组件
  import footera from './components/tabbar/taber.vue'
export default {
  data () {
    return {}
  },
  components:{
    footera
  }
}
</script>

<style>

</style>
