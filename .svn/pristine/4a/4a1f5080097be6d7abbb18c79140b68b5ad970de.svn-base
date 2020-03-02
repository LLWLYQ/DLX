<template>
  <div>
    <div class="base-tit" v-if="!titleLeft">
        <div class="base-tit_left">
            <h1>{{title}}</h1>
            <p>Previous participants</p>
        </div>
        <router-link to="/guest" class="base-tit_right more">更多 + </router-link>
    </div>
    <div class="base-tit-left" v-else>
        <h1>{{title}}</h1>
        <router-link to="/guest" v-if="!noMore">更多 + </router-link>
    </div>
    <div class="guest-list">
      <div class="guest-item" v-for="item in result" :key="item.id">
          <img :src="item.img" class="guest-img" alt="">
          <div class="guest-txt">
              <div class="guest-txt-top">
                  <h1>{{item.name}}</h1>
                  <a href="javascript:void(0);" @click="openLightBox(item)" class="openLightBox">详情</a>
              </div>
              <div class="guest-desc" v-html="item.desc"></div>
              <div class="guest-talk-title" v-html="'演讲主题：'+ item.theme">
              </div>
          </div>
      </div>
    </div>
    <transition name="fade">
      <div class="light-box" v-show="openLight">
          <div class="light-box-main">
              <div class="light-box-msg">
                  <img :src="LightBoxData.img" alt="">
                  <div class="light-box-txt">
                      <h1>姓名: <span class="name">{{LightBoxData.name}}</span></h1>
                      <p><span class="desc" v-html="LightBoxData.desc"></span></p>
                  </div>
              </div>
              <div class="light-box-tit">
                  <h1>主讲题目：</h1>
                  <p v-html="LightBoxData.theme"></p>
              </div>
              <a href="javascript:void(0);" class="light-box-close" @click='closeLightBox'></a>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openLight: false,
      LightBoxData: ''
    }
  },
  props: {
    result: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: '往届演讲嘉宾'
    },
    titleLeft: {
      type: Boolean,
      default: false
    },
    noMore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openLightBox (item) {
      this.openLight = true
      this.LightBoxData = item
    },
    closeLightBox () {
      this.openLight = false
    }
  }
}
</script>


<style lang="stylus">
  .guest-list
    display flex
    justify-content flex-start
    align-items center
    flex-wrap: wrap
    .guest-item
      flex 1
      display flex
      justify-content space-between
      align-items center
      border 1px solid #bfbfbf
      padding 15px 20px
      margin-top 30px
      box-sizing border-box
      border-radius 10px
      .guest-img
        width 90px
        height 90px
        border-radius 100%
        overflow hidden
      .guest-txt
        flex: 1
        max-width 206px
        margin-left 10px
       .guest-txt-top
          display flex
          justify-content space-between
          align-items center
          margin-bottom 10px
          h1
            font-size 1.125rem /* 18/16 */
            font-weight normal
            color #333
          a
            font-size .875rem /* 14/16 */
            color #00a0ea
      .guest-desc
        font-size .75rem /* 12/16 */
        color #727171
        line-height 25px
        height 80px
        overflow hidden
      .guest-talk-title
        font-size .75rem /* 12/16 */
        color #727171
        width 200px
        height 20px
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        p
          display inline
  // 灯箱
  .light-box
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    z-index 1111
    background rgba(0, 0, 0, 0.5)
    .light-box-main
      height 410px
      padding 15px
      background #f9f9f9
      color #444
      border-radius 5px
      box-shadow 0 10px 25px rgba(0, 0, 0, 0.5)
      box-sizing border-box
      position absolute
      left 0
      top 0
      bottom 0
      right 0
      margin auto 15px
    .light-box-close
      display block
      position absolute
      top -12px
      right -12px
      width 30px
      height 30px
      cursor pointer
      z-index 8040
      border-radius 100%
      background #fff url("http://lib.albers.top/activity/5g/close.png") no-repeat
    .light-box-msg
      display flex
      justify-content center
      align-items center
      img
        width 100px
      .light-box-txt
        flex 1
        margin-left 20px
        h1
          font-size 12px
          font-weight normal
          line-height 40px
        p
          font-size 12px
          line-height 24px
    .light-box-tit
      h1
        display inline
        font-size 14px
        margin-top 10px
        font-weight normal
      p
        display inline
</style>
