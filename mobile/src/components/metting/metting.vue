<template>
  <div class="baseW-750">
    <Header />
    <!--会议介绍-->
    <div class="referral MgT30 Mg15">
        <div class="base-tit-left">
            <h1>会议介绍</h1>
        </div>
        <div class="referral-msg" v-html="result.inc"></div>
    </div>
    <!-- 演讲嘉宾 -->
    <guest-list title="演讲嘉宾" class="MgT30 Mg15" :titleLeft="true" :result="result.now"></guest-list>
    <!-- 往届演讲嘉宾 -->
    <guest-list :titleLeft="true" class="MgT30 Mg15" :result="result.past"></guest-list>
    <!--会议论坛-->
    <div class="metting-page MgT30 Mg15">
        <div class="base-tit-left">
            <h1>会议论坛</h1>
        </div>
      <div class="MgT30">
        <img src="../../image/meeting.png" width="100%">
        <img src="http://lib.albers.top/activity/5g/metting-banner.png" width="100%" alt="">
        </div>
    </div>
    <!--议程安排-->
    <!-- <div class="agenda MgT30 Mg15">
      <div class="base-tit-left">
          <h1>议程安排</h1>
      </div>
      <p class="agenda-txt MgT30">研讨主题：电子射频微波技术、EMC电磁兼容技术、电子封装与测试技术、通信系统设计与测试技术、通信测试与建模技术、工业互联网</p>
      <div v-html="result.metting" class="table"></div>
    </div> -->
    <!--参会嘉宾-->
    <div class="metting-guest MgT30 Mg15">
      <div class="  base-tit-left">
          <h1>参会嘉宾</h1>
      </div>
      <div class="metting-guest-box MgT30">
          <p>科研机构、专家学者、实验室负责人、仪器企业负责人、相关政府部门及相关学会协会领导、运营商、设备厂商、经销商、终端厂商等
              电子通信测试测量仪表与设备厂商</p>
          <p>微波射频、毫米波、天线、无线通信、EMC电磁兼容、工业互联网等上中下游企业
              国家检测认证中心、科研机构、高校实验室等</p>
          <p>通讯、广电、信息技术、智能制造、工业、互联网等行业专业人员</p>
          <router-link to="/guest_login" class="apply MgT40">听众报名</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HttpRequest, { baseURL } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import GuestList from '@/base/guest/guest'

export default {
  name: 'metting',
  data () {
    return {
      result: ''
    }
  },
  mounted () {
    this.getResult()
  },
  methods: {
    getResult () {
      HttpRequest.get(`${baseURL}/five/data/metting`).then((res) => {
        console.log(res)
        this.result = res
      })
    }
  },
  components: {
    Header,
    Footer,
    GuestList
  }
}
</script>


<style lang="stylus">
  /*议程安排*/
  .agenda
    .agenda-txt
      font-weight bold
    .agenda-table
      font-size .75rem /* 12/16 */
      width: 100%
      margin-top: 20px
      tr, td
        text-align center
        border 1px solid #7c7c7c
      thead
        tr
          height: 47px
      tbody
        tr
          height 50px
          &.big
            height: 90px
  /*参会嘉宾*/
  .metting-guest .apply
    display block
    font-size 1rem /* 16/16 */
    text-align center
    color #fff
    background #21aae8
    width 160px
    height 45px
    margin 70px auto 0
    line-height 45px
    border-radius 10px
  .metting-guest-box p
    font-size .875rem /* 14/16 */
    text-indent 20px
    line-height 30px

</style>

