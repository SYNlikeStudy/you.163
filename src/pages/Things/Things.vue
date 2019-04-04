<template>
  <div id="thingsWrap">
    <Header>
      <div slot="title" class="slot">
        <span :class="$route.path.indexOf('/find')!=-1?'active':''" @click="$router.push('/things/find')">发现</span>
        <span :class="$route.path.indexOf('/choose')!=-1?'active':''" @click="$router.push('/things/choose')">甄选家</span>
      </div>
    </Header>
    <router-view />
  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  import Find from './Find/Find.vue'
  import Choose from './Choose/Choose.vue'
  export default {
    components: {
      Header,
      Choose
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #thingsWrap
    .slot
      flex 2
      justify-content center
      display flex
      span
        display block
        height 85px
        font-size 28px
        margin-right 36px
      .active
        color #b4282d
        font-weight bold
        font-size 40px
</style>
