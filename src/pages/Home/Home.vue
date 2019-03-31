<template>
  <div id="home">
    <!--home的头-->
    <section class="homeHeader">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共~~~~~款好物</span>
      <button>登录</button>
    </section>
    <!--home的头部导航-->
    <div>
      <!--home的头部导航原版-->
      <section class="homeNav">
        <ul class="homeNavUl">
          <li class="navItem active">推荐</li>
          <li class="navItem">居家生活</li>
          <li class="navItem">服饰鞋包</li>
          <li class="navItem">美食酒水</li>
          <li class="navItem">个护清洁</li>
          <li class="navItem">母婴亲子</li>
          <li class="navItem">运动旅行</li>
          <li class="navItem">数码家电</li>
          <li class="navItem">礼品特色</li>
        </ul>
        <div></div>
        <div class="arrow" @click="handleArrow" :class="isArrow ? 'downArrow' : 'upArrow'">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
        </div>
      </section>
      <!--home头部导航的展开-->
      <section class="all" v-show="isShow">
        <div class="allTitle">全部频道</div>
        <ul class="allUl">
          <li class="allItem active">推荐</li>
          <li class="allItem">居家生活</li>
          <li class="allItem">服饰鞋包</li>
          <li class="allItem">美食酒水</li>
          <li class="allItem">个护清洁</li>
          <li class="allItem">母婴亲子</li>
          <li class="allItem">运动旅行</li>
          <li class="allItem">数码家电</li>
          <li class="allItem">礼品特色</li>
        </ul>
      </section>
      <!--home头部导航展开时的遮罩层-->
      <section class="wrap" v-show="isShow" @click="handleArrow"></section>
    </div>
    <!--轮播-->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!--自营退货退款-->
    <section class="introduce">
      <div>网易自营品牌</div>
      <div class="center">30天无忧退货</div>
      <div>48小时快速退款</div>
    </section>
    <!--带图片的分类列表-->
    <section class="categoryList">
      <ul>
        <li v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </section>
    <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
    <!--四个图-->
    <section class="hasFourList">
      <ul>
        <li v-for="(item,index) in homeData.sceneLightShoppingGuideModule" :key="index">
          <p class="big">{{item.styleItem.title}}</p>
          <p class="small">{{item.styleItem.desc}}</p>
          <div>
            <img v-for="(pic,index) in item.styleItem.picUrlList" :src="pic" alt="" :key="index">
          </div>
        </li>
      </ul>
    </section>
    <!--私人定制轮播-->
    <section class="personalTailor">
      <h3>私人定制</h3>
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in personalTailorList" :key="index">
            <div v-for="(goods,index) in item" :key="index">
              <img :src="goods.primaryPicUrl" alt="">
              <span>{{goods.name}}<i>¥{{goods.counterPrice}}</i></span>
            </div>
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <!--限时购-->
    <section class="sixListWrap">
      <split />
      <h3>
        <span class="left">限时购</span>
        <span class="right">更多 ></span>
      </h3>
      <sixList :sixListData="homeData.flashSaleModule.itemList"/>
    </section>
    <!--新品首发-->
    <section class="sixListWrap">
      <split />
      <h3>
        <span class="left">新品首发</span>
        <span class="right">更多 ></span>
      </h3>
      <sixList :sixListData="homeData.flashSaleModule.itemList"/>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  import Split from '../../components/Split/Split.vue'
  import sixList from '../../components/sixList/sixList.vue'

  export default {
    data () {
      return {
        isShow: false,
        isArrow: true,// true箭头向下
      }
    },
    computed: {
      ...mapState({
        homeData: state => state.home.homeData
      }),
      // 私人定制数组
      personalTailorList () {
        let result = []
        for (let i = 0; i<4; i++) {
          let start = i * 3
          let end = start + 3
          result.push(this.homeData.personalShop.slice(start,end))
        }
        return result
      }
    },
    methods: {
      handleArrow () {
        this.isShow = !this.isShow
        this.isArrow = !this.isArrow
      }
    },
    mounted () {
      // 横向滑动的ul
      new BScroll('.homeNav', {
        scrollX: true,
        click: true,
      })
      //轮播
      var mySwiper = new Swiper ('.swiper-container', {
        //loop: true, // 循环模式选项
        //autoplay : { // 自动轮播
          //delay:3000
        //},
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    components: {
      Split,
      sixList
    }
  }

  window.addEventListener('DOMContentLoaded',function () {
  })
  window.onload = function () {
    const navUl = document.getElementsByClassName('homeNavUl')
    const navItem = document.getElementsByClassName('navItem')
    const allUl = document.getElementsByClassName('allUl')
    const allItem = document.getElementsByClassName('allItem')
    // dom操作ul列表的active
    handleUl(navUl,navItem)
    handleUl(allUl,allItem)
    function handleUl(uls,lis) {
      uls[0].addEventListener('click', function (event) {
        Array.from(lis).forEach(item => {
          item.classList.remove('active')
        })
        event.target.classList.add('active')
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #home
    padding-bottom 105px
    .homeHeader
      height 88px
      line-height 72px
      padding 16px 30px
      vertical-align middle
      display flex
      align-items center
      position fixed
      top 0
      left 0
      z-index 30
      background-color #fff
      img
        height 40px
      .input
        height 56px
        line-height 56px
        width 486px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
      .icon-search
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        position absolute
        left 230px
        top 30px
      button
        width 78px
        height 44px
        border 1px solid $main
        color $main
        background-color #fff
        font-size 24px
    .homeNav
      overflow hidden
      position relative
      margin-top 88px
      .homeNavUl
        width 1450px
        font-size 28px
        color #333
        clearFix()
        li
          width 112px
          height 66px
          margin 0 19px
          line-height 66px
          float left
          text-align center
          &.active
            border-bottom 6px solid $main
            color $main
      .arrow
        width 100px
        height 60px
        text-align center
        padding-top 15px
        background-color #fff
        z-index 15
        position absolute
        top 0
        right 0
        transition all 1
        &.downArrow
          transform rotate(0deg)
          transition all 0.5
        &.upArrow
          transform rotate(180deg)
          transition all 0.5
    .all
      background-color #fff
      height 372px
      width 100%
      color #333
      top-border-1px(#eee)
      position absolute
      top 72px
      left 0
      z-index 10
      .allTitle
        width 100%
        height 60px
        line-height 60px
        font-size  28px
        padding-left 30px
      .allUl
        padding 24px 0 0 0
        li
          width 150px
          height 56px
          line-height 56px
          text-align center
          border 1px solid #ccc
          border-radius 4px
          float left
          font 24px
          margin 0 0 40px 30px
          background-color #fafafa
          &.active
            color $main
            border-color $main
    .wrap
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      z-index 5
      margin auto
      background-color rgba(0,0,0,.5)
    // 轮播
    .firstSwiper
      width 100%
      height 370px
      img
        width 100%
    //自营退货退款
    .introduce
      width 100%
      height 72px
      line-height 72px
      display flex
      justify-content center
      color $main
      div
        text-align center
      .center
        margin 0 40px
    .categoryList
      margin-bottom 40px
      ul
        width 100%
        height 332px
        li
          width 150px
          float left
          display flex
          flex-direction column
          text-align center
          padding 15px 20px 0 20px
          box-sizing border-box
          img
            height 110px
            width 110px
            display block
    //四个图
    .hasFourList
      margin-top 40px
      ul
        display flex
        flex-wrap wrap
        justify-content center
        li
          width 343px
          height 260px
          padding 20px 0 0 20px
          margin 4px 0 0 4px
          background-color #f5f5f5
        .big
          font-size 32px
          color #333
          padding-left 10px
        .small
          font-size 24px
          color #7f7f7f
          margin 10px 0
          padding-left 10px
        div
          img
            float left
            width 150px
            height 150px
    .personalTailor
      overflow hidden
      margin-bottom 30px
      h3
        height 100px
        line-height 100px
        font-size 32px
        padding-left 30px
      .swiper-container
        height 380px
        ul
          width 3000px
          height 311px
          display flex
        li
          width 750px
          display flex
          div
            display flex
            flex-direction column
            margin-left 20px
            span
              width 210px
              i
                color $main
            img
              background-color #f5f5f5
              height 216px
              width 216px
              margin-bottom 12px
    .sixListWrap
      h3
        height 100px
        line-height 100px
        margin-top 20px
        .left
          font-size 32px
          margin-left 50px
        .right
          font-size 28px
          float right
          margin-right 50px
</style>
