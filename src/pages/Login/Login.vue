<template>
  <div id="login">
    <Header>
      <span slot="title" class="slot">网易严选</span>
    </Header>
    <LoginHome v-show="!isLoginPhone && !isLoginMail" :changeIsLoginPhone="changeIsLoginPhone"
               :changeIsLoginMail="changeIsLoginMail"/>
    <LoginPhone v-show="isLoginPhone" :changeIsLoginPhone="changeIsLoginPhone"/>
    <LoginMail v-show="isLoginMail" :changeIsLoginMail="changeIsLoginMail"/>
  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  import LoginHome from './LoginHome/LoginHome.vue'
  import LoginPhone from './LoginPhone/LoginPhone.vue'
  import LoginMail from './LoginMail/LoginMail.vue'

  export default {
    data () {
      return {
        isLoginPhone: false,
        isLoginMail: false
      }
    },
    methods: {
      changeIsLoginPhone () {
        this.isLoginPhone = !this.isLoginPhone
      },
      changeIsLoginMail () {
        this.isLoginMail = !this.isLoginMail
      }
    },
    components: {
      Header,
      LoginHome,
      LoginPhone,
      LoginMail
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    background-color #f2f5f4
    height 100%
    .slot
      font-weight 900
      font-size 40px
      flex 1
      margin-left 36px
</style>
