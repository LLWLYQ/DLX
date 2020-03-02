<template>
  <div class="baseW-750">
    <Header />
    <!-- 展会介绍 -->
    <div class="introduce Mg15 MgT15">
      <div class="base-tit">
        <div class="base-tit_left">
            <h1>展会介绍</h1>
            <p>Overview</p>
        </div>
      </div>
      <div class="introduce-txt MgT15" v-html="result.content"></div>
    </div>
    <!--展会嘉宾-->
    <guest-list :result="result.member" class="Mg15 MgT15"></guest-list>
    <!--组织架构 & 大会议题-->
    <div class="organization-main">
      <!--组织架构-->
      <div class="organization-box MgT30 Mg15">
          <div class="base-tit">
              <div class="base-tit_left">
                  <h1>组织架构</h1>
                  <p>Organization</p>
              </div>
              <router-link to="/chart" class="base-tit-right more">更多 + </router-link>
          </div>
          <div class="organization-list">
              <div class="org-item">
                  <span>主办单位：</span>
                  <p>深圳市科学技术协会、深港科技社团联盟、广东省通信学会、
                    广东省仪器仪表学会</p>
              </div>
              <div class="org-item">
                  <span>承办单位：</span>
                  <p>深圳市仪器仪表学会、深圳市通信与互联网协会、
                    中国仪器仪表学会深圳联络处、广州德禄讯信息科技有限公司<br>
                    《仪器仪表商情》</p>
              </div>
              <div class="org-item">
                  <span>协办单位：</span>
                  <p>中国仪器仪表学会、广东省无线电协会、
                    中国仪器仪表学会泛珠三角区域联盟秘书处、星球国际资讯集团</p>
              </div>
              <div class="org-item">
                  <span>协办媒体：</span>
                  <p>仪商网、激光制造网、C114通信网、光通讯网、网络通信中国、
                    讯石光通讯资讯网、中国通讯人才网、CIO时代、中国通讯网移动通信网、
                    通信人才网、网络电信</p>
              </div>
          </div>
      </div>
      <!--大会议题-->
      <div class="topics-box MgT30 Mg15">
          <div class="base-tit">
              <div class="base-tit_left">
                  <h1>大会议题</h1>
                  <p>Topics</p>
              </div>
              <router-link to="/metting" class="base-tit-right more">更多 + </router-link>
          </div>
          <ul class="topics-list">
              <li>★ 5G 核心技术大会</li>
              <li>★ 电子射频微波技术研讨会</li>
              <li>★ EMC电磁兼容技术研讨会</li>
              <li>★ 电子封装与测试技术研讨会</li>
              <li>★ 通信系统设计与测试技术研讨会</li>
              <li>★ 通信测试与建模技术研讨会</li>
              <li>★ 工业互联网技术峰会</li>
          </ul>
      </div>
    </div>
    <!--往届回顾-->
    <div class="review-box MgT30 Mg15">
      <div class="base-tit">
          <div class="   base-tit_left">
              <h1>往届回顾</h1>
              <p>Previous reviews</p>
          </div>
          <router-link to="review" class="base-tit-right more">更多 +</router-link>
      </div>
      <div class="carousel-list carousel-box">
          <div class="carousel-main-box">
              <div class="carousel-wrapper" ref="carouselWrapper" @mouseover="closeAutoCarouse" @mouseout="autoCarouse">
                  <div class="carousel-item" ref="carouselItem" v-for="item in result.review" :key="item">
                      <img :src="item" alt="">
                  </div>
              </div>
          </div>
      </div>
    </div>
    <!--参会企业-->
    <div class="company-go MgT30 Mg15">
        <div class="base-tit">
            <div class="base-tit_left">
                <h1>参会企业</h1>
                <p>Attending enterprises</p>
            </div>
        </div>
        <div class="media-list" style="overflow: hidden">
          <a class="img-item" v-for="item in result.join_company" :key="item.id" href="" target="_blank">
            <img style="float: left;width: 20%;margin: 10px 5px 10px 10px;" :src="item" alt="">
          </a>
        </div>
    </div>
    <!--媒体报道-->
    <div class="media MgT30 Mg15">
      <div class="base-tit">
        <div class="base-tit_left">
          <h1>媒体报道</h1>
          <p>Media Report</p>
        </div>
      </div>
        <!-- 一大一小布局 -->
      <div class="mediason">
        <a href="" class="box-max-top">
          <img :src="result.report[0].img" alt="">
        </a>
        <a href="" class="box-max-bottom">
          <img :src="result.report[1].img" alt="">
        </a>

        <a href="" target="_blank">
          <img :src="result.report[3].img" alt="">
        </a>
      </div>
      <div class="mediason">
        <a href="" target="_blank">
          <img :src="result.report[2].img" alt="">
        </a>
        <a href="" target="_blank">
          <img :src="result.report[4].img" alt="">
        </a>
        <a href="" target="_blank">
          <img :src="result.report[5].img" alt="">
        </a>
      </div>
      <div class="mediason">
        <a class="box-middle-top-right">
          <img :src="result.report[6].img" alt="">
        </a>
        <a href="" target="_blank">
          <img :src="result.report[7].img" alt="">
        </a>
        <a href="" target="_blank">
          <img :src="result.report[8].img" alt="">
        </a>
        <a href="" class="box-max-top">
          <img :src="result.report[9].img" alt="">
        </a>
        <a href="" class="box-max-bottom">
          <img :src="result.report[10].img" alt="">
        </a>
      </div>
    </div>

    <!--合作媒体-->
    <div class="media MgT30 Mg15">
      <div class="base-tit">
        <div class="base-tit_left">
          <h1>合作媒体</h1>
          <p>Media Partners</p>
        </div>
      </div>
      <!-- 一大一小布局 -->
      <div class="media-list" style="overflow: hidden">
        <a class="img-item" v-for="item in result.partners" :key="item.id" href="" target="_blank">
          <img style="float: left;width: 20%;margin-left:10px;margin-right:5px;margin-top: 10px;margin-bottom: 10px" :src="item.img" alt="">
        </a>
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
  name: 'App',
  data () {
    return {
      result: '',
      carousel: {
        oldX: 0
      }
    }
  },
  mounted () {
    this.getIndexResult()
    setTimeout(() => {
      this.autoCarouse()
    }, 1000)
  },
  methods: {
    getIndexResult () {
      HttpRequest.get(`${baseURL}/five/data/index`).then((res) => {
        this.result = res
      })
    },
    // 自动轮播
    autoCarouse () {
      const main = this.$refs.carouselWrapper
      const itemW = this.$refs.carouselItem[0].offsetWidth + 20
      this.timer = setInterval(() => {
        // 计算滚动长度是否超过总长度(模块宽度 * （模块数量 - 未滚动前的2个）)
        if (Math.abs(this.carousel.oldX) >= (itemW * (this.$refs.carouselItem.length - 2))) {
          this.carousel.oldX = 0
        } else {
          this.carousel.oldX += -itemW
        }
        main.style.transform = `translate3d(${this.carousel.oldX}px, 0, 0)`
      }, 1000)
    },
    // 计算偏移差值
    calculative (oldX, runX, flag = true) {
      let newX = ''
      if (flag) {
        newX = oldX + (-runX)
      } else {
        newX = oldX + runX
      }
      this.carousel.oldX = newX
      return newX
    },
    // 开启自动轮播
    OpenAutoCarouse () {
      this.autoCarouse()
    },
    // 关闭自动轮播
    closeAutoCarouse () {
      clearInterval(this.timer)
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
  // 展会介绍
  .img-item
    img
  .introduce
    .introduce-txt
      p
        font-size .75rem /* 12/16 */
        line-height 24px
        text-indent 20px
  // 组织架构
  .organization-main
    .organization-list
      font-size 1rem /* 16/16 */
      padding 25px 35px 25px 15px
      border 1px solid #e5e5e5
      .org-item
        font-size .875rem /* 14/16 */
        display flex
        justify-content space-between
        align-items flex-start
        line-height 30px
        & + .org-item
          margin-top: 25px
        span
          display block
          width 85px
          color #00a0ea
        p
          flex 1
    .topics-list
        padding 25px
        border 1px solid #e5e5e5
        box-sizing: border-box
        li
          font-size .875rem /* 14/16 */
          margin-bottom 20px
          color #727171
  /*参会企业*/
  .company-go
    .company-img-box
      margin-top 15px
      border 0px solid #667784
      img
        width 20%
        margin: auto
  .media
    overflow hidden
    .mediason
      width 30%
      float left
      margin-left 10px
      margin-top 5px
    img
      display: block;
      width: 100%;
      float: left;
      margin: 5px
      margin-left: 0px
</style>

