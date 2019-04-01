<template>
  <div id="login">
    <header>
      <i class="iconfont icon-shouye" @click="goto('/home')"></i>
      <span>网易严选</span>
      <div>
        <i class="iconfont icon-sousuo" @click="goto('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="goto('/shopcart')"></i>
      </div>
    </header>
    <div class="up">
      <section class="logol">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </section>
      <section class="choose">
        <button class="phone">
          <i class="iconfont icon-shouji"></i>手机号码登陆
        </button>
        <button class="mail">
          <i class="iconfont icon-youxiang"></i>邮箱账号登陆
        </button>
        <p>手机号快捷注册></p>
      </section>
    </div>
    <footer>
      <div>
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
        <span class="split">|</span>
      </div>
      <div>
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
        <span class="split">|</span>
      </div>
      <div>
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </footer>
  </div>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    background-color #f2f5f4
    height 100%
    header
      display flex
      background-color #fafafa
      height 88px
      line-height 88px
      span
        font-weight 900
        font-size 40px
        flex 1
        margin-left 36px
      div
        flex 1
        .icon-sousuo
          margin-left 50px
          margin-right 20px
        i
          font-size 46px
      .icon-shouye
        flex 1
        margin-left 32px
        font-size 51px
    .up
      display flex
      flex-direction column
      align-items center
      .logol
        height 450px
        line-height 490px
        text-align center
        img
          width 268px
          height 90px
      .choose
        display flex
        flex-direction column
        button
          border 1px solid #b4282d
          height 98px
          width 679px
          font-size 28px
          i
            font-size 30px
            margin-right 16px
        .phone
          background-color #b4282d
          color #fff
        .mail
          margin-top 30px
          color #b4282d
          background-color #f2f5f4
        p
          font-size 28px
          margin-top 32px
          text-align center
    footer
      display flex
      justify-content center
      margin-top 375px
      padding-bottom 85px
      div
        i
          font-size 36px
          color #7f7f7f
        span
          font-size 30px
          color #7f7f7f
          margin-right 30px
        .split
          font-weight bold
          font-size 30px
</style>
