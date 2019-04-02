<template>
  <div id="searchWrap" v-if="searchInitialData.defaultKeyword">
    <section class="searchHeader">
      <span class="input">
        <span class="icon-search"></span>{{searchInitialData.defaultKeyword.keyword}}
      </span>
      <span class="cancel" @click="returnLast">取消</span>
    </section>
    <div class="hot">热门搜索</div>
    <section class="list">
      <ul>
        <li v-for="(hotKeyword) in searchInitialData.hotKeywordVOList" :key="hotKeyword.extra.materialId">{{hotKeyword.keyword}}</li>
      </ul>
    </section>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getSearchInitialData')
    },
    computed: {
      ...mapState({
        searchInitialData: state => state.search.searchInitialData
      })
    },
    methods: {
      returnLast () {
        this.$router.back()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchWrap
    .searchHeader
      display flex
      margin 20px 0 0 30px
      .input
        width 612px
        height 56px
        padding-left 60px
        line-height 56px
        background-color #f4f4f4
        font-size 28px
        color #666
        position relative
        margin-right 20px
        .icon-search
          width 60px
          height 56px
          background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
          background-position 20px 15px
          position absolute
          left 0px
          top 0px
      .cancel
        line-height 56px
        font-size 28px
    .hot
      font-size 28px
      padding 30px 0 0 30px
      color #999
    .list
      ul
        color #333
        font-size 28px
        display flex
        flex-wrap wrap
        margin 30px 0 0 30px
        li
          padding 8px 15px 8px 15px
          margin 0 60px 32px 0
          border 1px solid #999
</style>
