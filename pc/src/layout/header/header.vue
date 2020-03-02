<template>
  <div class="header">
    <div class="banner">
        <img src="../../image/banner.jpg" alt="" />
    </div>
    <div class="nav">
      <router-link :to="item.url" v-for="item in link" :key="item.name">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
import nav from '@/utils/nav'

export default {
  data() {
    return {
      'link': nav
    }
  }
}
</script>
<style lang="stylus">
  .banner
    width 100%
    height 500px
    img
      width 100%
      height 100%
  .nav
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 70px
    line-height: 70px
    a
      flex 1
      font-size 16px
      font-weight bold
      text-align center
      color #fff
      &:nth-child(2n)
        background #38b6ec
      &:nth-child(2n+1)
        background #21aae8
      &.router-link-exact-active
        background #da251c

</style>
