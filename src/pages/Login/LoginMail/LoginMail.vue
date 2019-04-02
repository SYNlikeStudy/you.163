<template>
  <div id="loginMailWrap">
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <label class="input_phone">
        <input type="text" placeholder="邮箱账号"/>
      </label>
      <label class="input_code">
        <input type="text" placeholder="密码"/>
      </label>
      <div class="login_help">
        <span>注册账号</span>
        <span class="right">忘记密码</span>
      </div>
      <div class="phone_login active">
        <span>登录</span>
      </div>
      <div class="email_login" @click="changeIsLoginMail">
        <span>其他账号登录</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      changeIsLoginMail: Function
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #loginMailWrap
    width 100%
    height 100%
    padding 110px 0 0
    background-color white
    box-sizing border-box
    position relative
    &.is_personal
      background-color #f2f5f4
    .top_login
      width 679px
      height 752px
      color #000000
      margin 0 auto
      .top_img
        width 100%
        height 133px
        display flex
        justify-content center
        align-items center
        margin-bottom 130px
        img
          width 192px
          height 64px
      .input_phone
        position relative
        margin-top 30px
      .login_tips
        position absolute
        left 50%
        top -100%
        width 50%
        transform translateX(-50%)
        color red
        font-size 28px
    .input_phone,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 27px
        line-height 45px
    .login_help
      span
        color #bdbdbd
      .right
        float right
    .input_code
      position relative
    .phone_login,.email_login
      width 679px
      height 98px
      color #b4282d
      margin 32px 0 0
      text-align center
      line-height 98px
      font-size 28px
      border 1px solid #b4282d
      &.active
        background-color #b4282d
        color white
    .email_register
      text-align center
      font-size 28px
      color #000000
      margin-top 20px

</style>
