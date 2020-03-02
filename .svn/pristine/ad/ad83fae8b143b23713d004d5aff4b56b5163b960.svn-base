<template>
  <div class="baseW-750">
    <Header />
    <div class="chart-main MgT30 Mg15">
      <div class="base-tit-left">
          <h1>展览概况</h1>
      </div>
      <div class="chart-box">
          <div class="chart-item">
              <span>主办单位：</span>
              <p>深圳市科学技术协会、深港科技社团联盟、广东省通信学会、
                  广东省仪器仪表学会</p>
          </div>
          <div class="chart-item">
              <span>承办单位：</span>
              <p>深圳市仪器仪表学会、深圳市通信与互联网协会、中国仪器仪表
                  学会深圳联络处、深圳市星之球信息科技有限公司、广州德禄讯
                  信息科技有限公司《仪器仪表商情》</p>
          </div>
          <div class="chart-item">
              <span>协办单位：</span>
              <p>中国仪器仪表学会、广东省无线电协会、中国仪器仪表学会泛珠
                  三角区域联盟秘书处、星球国际资讯集团</p>
          </div>
          <div class="chart-item">
              <span>协办媒体：</span>
              <p>仪商网、激光制造网、光通讯网、网络通信中国、讯石光通讯资
                  讯网、中国通讯人才网、CIO时代、中国通讯网移动通信网、通
                  信人才网、网络电信</p>
          </div>
      </div>
    </div>
    <!-- 联系我们 -->
    <Contact :result="result.contact" />
    <Footer />
  </div>
</template>

<script>
import HttpRequest, { baseURL } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import Contact from '@/base/contact/contact'

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
      HttpRequest.get(`${baseURL}/five/data/chart`).then((res) => {
        this.result = res
      })
    }
  },
  components: {
    Header,
    Footer,
    Contact
  }
}
</script>

<style lang="stylus">
  .chart-box
    width 100%
    margin 30px auto 0
    .chart-item
      font-size 1rem /* 16/16 */
      display flex
      justify-content flex-start
      margin-bottom 30px
      span
        display block
        width 100px
        text-align center
        color #00a0ea
      p
        flex 1
</style>
