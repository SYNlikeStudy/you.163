<template>
  <div id="app">
    <router-view />
    <FooterNav />
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
