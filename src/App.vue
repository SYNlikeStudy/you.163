<template>
  <div>
    <router-view />
    <FooterNav />
  </div>
</template>
<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'
  export default {
    components: {
      FooterNav
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
