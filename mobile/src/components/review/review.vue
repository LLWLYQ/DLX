<template>
  <div class="baseW-750">
    <Header />
    <!-- 往届论坛回顾 -->
    <div class="referral MgT30 Mg15">
        <div class="base-tit-left">
            <h1>往届论坛回顾</h1>
        </div>
        <div class="referral-msg">
            <a :href="item.review_forum_link" target="_blank" :key="item.id" v-for="item in result.forum">
              {{item.title}}
            </a>
        </div>
    </div>
    <!-- 历届嘉宾 -->
    <guest-list noMore class="MgT30 Mg15" titleLeft title="往届参会嘉宾" :result="result.past_guest"></guest-list>
    <!--上届专业听众分析-->
    <div class="review-list MgT30 Mg15">
      <div class="  base-tit-left">
          <h1>上届专业听众分析</h1>
      </div>
      <div class="review-banner MgT30">
        <img src="../../image/review.png" width="100%"/></div>
    </div>
    <!-- 参会企业 -->
    <Company class="MgT30 Mg15" />
    <Footer />
  </div>
</template>

<script>
import HttpRequest, { baseURL } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import GuestList from '@/base/guest/guest'
import Company from '@/base/company/company'

export default {
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
      HttpRequest.get(`${baseURL}/five/data/review`).then((res) => {
        console.log(res)
        this.result = res
      })
    }
  },
  components: {
    Header,
    Footer,
    GuestList,
    Company
  }
}
</script>

<style lang="stylus">

</style>
