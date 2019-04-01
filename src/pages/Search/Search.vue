<template>
  <div id="searchWrap">
    <section class="searchHeader">
      <span class="input">
        <span class="icon-search"></span>搜索商品,共~~~~~款好物
      </span>
      <span class="cancel" @click="returnLast">取消</span>
    </section>
  </div>
</template>
<script>
  export default {
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
</style>
