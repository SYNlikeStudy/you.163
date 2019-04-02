<template>
  <div id="thingsWrap">
    <Header>
      <div slot="title" class="slot">
        <span>发现</span>
        <span>甄选家</span>
      </div>
    </Header>
    <nav class="navList">
      <ul>
        <li v-for="(thing) in thingsNav" :key="thing.tabId">{{thing.tabName}}</li>
      </ul>
    </nav>
    <!--中间的内容部分-->
    <section class="center" v-for="(things,index) in thingsData" :key="index">
      <header v-for="(thing,index) in things.topics" :key="index">
        <div class="style2" v-if="thing.style === 2">
          <Split />
          <section class="wrap">
            <div class="left">
              <h3>
                <div>
                  <img :src="thing.avatar" alt="">
                </div>
                <span>{{thing.nickname}}</span>
              </h3>
              <p class="big">{{thing.title}}</p>
              <p class="small">{{thing.subTitle}}</p>
              <section>
                <i class="iconfont icon-kanguo"></i>
                <span>{{thing.readCount}}人看过</span>
              </section>
            </div>
            <div class="right">
              <img :src="thing.picUrl" alt="">
            </div>
          </section>
        </div>
        <div class="style1" v-if="thing.style === 1">
          <Split />
          <section class="wrap">
            <h3>
              <div>
                <img :src="thing.avatar" alt="">
              </div>
              <span>{{thing.nickname}}</span>
            </h3>
            <p>{{thing.title}}</p>
            <div class="bigImage">
              <img :src="thing.picUrl" alt="">
            </div>
            <footer>
              <i class="iconfont icon-kanguo"></i>
              <span>{{thing.readCount}}人看过</span>
            </footer>
          </section>
        </div>
      </header>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Header from '../../components/Header/Header.vue'
  import Split from '../../components/Split/Split.vue'
  export default {
    mounted () {
      //请求导航数据
      this.$store.dispatch('getThingsNav',() => {
        this.$nextTick(() => {
          new BScroll('.navList',{//导航滑动
            scrollX: true
          })
        })
      })
      //请求数据
      this.$store.dispatch('reqThingsData')
    },
    computed: {
      ...mapState({
        thingsNav: state => state.things.thingsNav,
        thingsData: state => state.things.thingsData
      })
    },
    components: {
      Header,
      Split
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #thingsWrap
    .slot
      span
        font-size 28px
        margin-right 36px
    .navList
      width 100%
      overflow hidden
      border-bottom 1px solid #d9d9d9
      border-top 1px solid #d9d9d9
      background-color #fafafa
      ul
        display flex
        flex-wrap wrap
        height 74.5px
        line-height 74.5px
        width 1020px
        li
          font-size 28px
          margin 0 20px
          padding 0 8px
          color #7f7f7f
    .center
      .style2
        .wrap
          display flex
          justify-content space-between
          padding 32px 30px
          .left
            width 400px
            h3
              display flex
              height 54px
              line-height 54px
              div
                width 54px
                height 54px
                border-radius 50%
                overflow hidden
                margin-right 12px
                img
                  width 54px
                  height 54px
              span
                font-size 28px
                color #333
            .big
              color #333
              font-size 36px
              padding-top 32px
            .small
              color #7f7f7f
              font-size 28px
              padding-top 8px
            section
              margin-top 18px
              color #999
              i
                font-size 30px
          .right
            height 272px
            width 272px
            border-radius 8px
            overflow hidden
            img
              height 272px
              width 272px
      .style1
        .wrap
          padding 32px 30px
          h3
            display flex
            height 54px
            line-height 54px
            margin-bottom 24px
            div
              width 54px
              height 54px
              border-radius 50%
              overflow hidden
              margin-right 12px
              img
                width 54px
                height 54px
            span
              font-size 28px
              color #333
          p
            font-size 19px
            color #333
            margin-bottom 16px
          .bigImage
            border-radius 8px
            overflow hidden
            img
              height 376px
              width 690px
          footer
            margin-top 10px
            color #999
            span
              font-size 13px
            i
              font-size 15px
</style>
