<template>
    <div>
      <section class="msite">
        <!--首页头部-->

        <headertop :title="address.name">
           <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
        </span>
        </headertop>

        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper" v-if="cateArr.length">
              <div class="swiper-slide" v-for="(cates , index) in cateArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(shop , i) in cates" :key="i">
                  <div class="food_container">
                    <img :src="baseUrl+shop.image_url">
                  </div>
                  <span>{{shop.title}}</span>
                </a>
              </div>
            </div>
            <img src="./images/msite_back.svg" alt="" v-else>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>

          </div>
        </nav>
        <!--首页附近商家-->
        <shoplist></shoplist>
      </section>
    </div>
</template>

<script>
  import headertop from '../../components/hrader/header';
  import shoplist from  '../../components/shopList/shoplist';
  import { mapState } from 'vuex'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        baseUrl:'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')

    },
    watch:{
      categorys(value){
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,//可选选项，自动滑动
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    computed:{
      ...mapState(['address','categorys']),
      /*
      * 把categorys分解成一个二维数组
      * */
      cateArr(){
        const {categorys} = this
        //新建一个空二维数组
        const cates=[]
        let minArr=[]
        categorys.forEach(c=>{
          if (minArr.length===8){
            minArr=[]
          }
          if (minArr.length===0){
            cates.push(minArr)
          }
          minArr.push(c);
        })
        return cates;
      }
    },
    components:{
      headertop,
      shoplist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%

    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
