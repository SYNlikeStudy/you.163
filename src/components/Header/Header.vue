<template>
  <header>
    <i class="iconfont icon-shouye" @click="goto('/home')"></i>
    <slot name="title"></slot>
    <div>
      <i class="iconfont icon-sousuo" @click="goto('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="goto('/shopcart')"></i>
    </div>
  </header>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  header
    display flex
    background-color #fafafa
    height 88px
    width 100%
    line-height 88px
    position fixed
    left 0
    top 0
    z-index 10
    padding 0 24px
    div
      flex 1
      .icon-sousuo
        margin-left 50px
        margin-right 20px
      i
        font-size 46px
    .icon-shouye
      flex 1
      font-size 51px
</style>
