<template>
  <div id="app">
    <router-view />
    <FooterNav v-show="$route.meta.isShow"/>
  </div>
</template>
<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'
  export default {
    components: {
      FooterNav
    },
    mounted () {
      this.$store.dispatch('getHomeData')
      this.$store.dispatch('getUserInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    height 100%
</style>
