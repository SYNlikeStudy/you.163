<template>
  <div id="sixListWrap">
    <ul>
      <li v-for="(item) in sixListData" :key="item.itemId">
        <img :src="item.picUrl" alt="">
        <div>
          <span class="now">¥{{item.activityPrice}}</span>
          <del class="current">¥{{item.originPrice}}</del>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      sixListData: Array
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #sixListWrap
    margin-bottom 20px
    ul
      display flex
      flex-wrap wrap
      padding-left 25px
      li
        width 216px
        height 318px
        margin-right 25px
        text-align center
        div
          height 100px
          line-height 100px
          .now
            color #b4282d
            font-size 28px
            margin-right 20px
          .current
            color #7f7f7f
        img
          background-color #f5f5f5
          width 216px
          height 216px
</style>
