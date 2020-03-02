<template>
  <div class="baseW-1100">
    <Header />
      <!--展览概况-->
      <div class="referral MgT70">
          <div class="base-tit-left">
              <h1>展览概况</h1>
          </div>
          <div class="referral-msg" v-html="result.content"></div>
      </div>
      <!--产品方向-->
      <div class="product-line MgT70">
        <div class="base-tit-left">
            <h1>产品方向</h1>
        </div>
        <div class="product-line-box MgT30">
          <h1>01 通信技术</h1>
          <div class="pro-box-one MgT30">
              <div class="pro-item">
                  <img src="././images/icon-pro/1.png" alt="">
                  <h1>电子测试技术</h1>
                  <p>通信通用仪器：分析仪、宽带示波器、光谱分析仪、以太网数
                      据分析仪、天馈线测试仪、信令分析仪、频谱分析仪仪、无线
                      通信测试仪</p>
              </div>
              <div class="pro-item">
                  <img src="./images/icon-pro/2.png" alt="">
                  <h1>微波，毫米波，射频</h1>
                  <p>通信微波设备、微波原件、部件毫米波天线、辐射计、探头
                      射频功率计、便携式产品、组件、RF测试</p>
              </div>
              <div class="pro-item">
                  <img src="./images/icon-pro/3.png" alt="">
                  <h1>封装与测试</h1>
                  <p>半导体、芯片和模组、可编程器件、测试仪器</p>
              </div>
              <div class="pro-item">
                  <img src="./images/icon-pro/4.png" alt="">
                  <h1>EMC与EMI</h1>
                  <p>EMC电波暗室、电磁干扰、EMI滤波器测试与控制仪器设备
                      、智能检测系统</p>
              </div>
              <div class="pro-item">
                  <img src="./images/icon-pro/5.png" alt="">
                  <h1>物联网智能解决方案</h1>
                  <p>嵌入式物联网系统、软硬件优化设计大数据及云计算、
                      工业设备联网软硬件产品</p>
              </div>
              <div class="pro-item">
                  <img src="./images/icon-pro/6.png" alt="">
                  <h1>网络运营终端</h1>
                  <p>设备制造商、网络运营商、平台供应商、系统集成商
                      一站式解决方案、信息安全</p>
              </div>
          </div>
          <h1 class="MgT30">02 工业互联网与智能制造</h1>
          <div class="pro-box-two">
              <div class="pro-item">
                  <div class="pro-img">
                      <img src="./images/icon-pro/7.png" alt="">
                  </div>
                  <h1>测试测量技术</h1>
                  <p>现场仪表（在线检测）  传感器    机器视觉检测智能仪器 虚拟软件嵌入式技术仿真技术工业专用测试仪器、热像仪</p>
              </div>
              <div class="pro-item">
                  <div class="pro-img">
                      <img src="./images/icon-pro/8.png" alt="">
                  </div>
                  <h1>工业通信与安全</h1>
                  <p>现场总线 工业以太网 工业无线  机器视觉 物联网  车联网工业连接    集成电路部件连接器电子元件EMC  微波   毫米波太赫兹</p>
              </div>
              <div class="pro-item">
                  <div class="pro-img">
                      <img src="./images/icon-pro/9.png" alt="">
                  </div>
                  <h1>机器控制 ︱过程控制</h1>
                  <p>PLC    DCS    HMI    控制系统  嵌入式系统运动控制 工业机器人控制软件工控机人机界面变频器电机与运动控制远程监控</p>
              </div>
              <div class="pro-item">
                  <div class="pro-img">
                      <img src="./images/icon-pro/10.png" alt="">
                  </div>
                  <h1>优化︱集成︱管理</h1>
                  <p>MES   PLM 能效管理设备管理与维护 工业数据方案物联网设备后端系统</p>
              </div>
              <div class="pro-item">
                  <div class="pro-img">
                      <img src="./images/icon-pro/11.png" alt="">
                  </div>
                  <h1>智能制造</h1>
                  <p>新一代信息技术、高档数控机床和机器人、模具金属加工、机械工业、电子与电力装备
                      智能控制测试系统、工业自动化软件、系统集成测试、可靠性安全测试；数字化智能化精密检测、工业通讯</p>
              </div>
          </div>
        </div>
      </div>
      <!-- 展览展示 -->
      <div class="exhibition MgT70">
        <div class="  base-tit-left">
            <h1>展览展示</h1>
        </div>
        <div class="exhibition-box MgT30">
            <img :src="result.show" alt="">
        </div>
      </div>
      <!-- 收费标准 -->
      <div class="rates MgT70">
        <div class="  base-tit-left">
            <h1>收费标准</h1>
        </div>
        <div class="rates-box MgT30">
            <img :src="result.cost" alt="">
        </div>
      </div>
      <!-- 参会企业 -->
      <div class="rates MgT70">
        <div class="  base-tit-left">
          <h1>参会企业</h1>
        </div>
        <div class="company-img-box MgT30">
          <img style="width: 100%" src="http://lib.861718.com/activity/5g/test/test3.png" alt="">
        </div>
      </div>
      <!--<Company />company控件不用了-->
    <Footer />
  </div>
</template>

<script>
import HttpRequest, { baseURL } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import Company from '@/base/company/company'

export default {
  data() {
    return {
        result: ''
    }
  },
  mounted() {
    this.getResult()
  },
  methods: {
    getResult() {
      HttpRequest.get(`${baseURL}/five/data/show`).then((res) => {
          console.log(res)
          this.result = res
      })
    }
  },
  components: {
    Header,
    Footer,
    Company
  }
}
</script>

<style lang="stylus">
  /*产品方向*/
  .product-line-box
    h1
      font-weight normal
      color #00a0ea
    .pro-box-one
      display flex
      justify-content center
      align-items flex-start
      flex-wrap wrap
      height 560px
      overflow hidden
      border-bottom 1px #ccc dashed
      .pro-item
        flex 0 0 335px
        margin 0 15px 80px
        box-sizing border-box
        overflow hidden
        img
          margin:0 auto 33px
        h1
          font-size 16px
          text-align center
          margin-bottom 35px
        p
          color #a0a0a0
          height 60px
          overflow hidden
    /*第二层*/
    .pro-box-two
      display flex
      justify-content flex-start
      align-items flex-start
      margin-top 110px
      .pro-item
        flex 0 0 205px
        height 255px
        padding 0 16px
        border 1px solid #ccc
        box-sizing border-box
        position relative
        & + .pro-item
          margin-left 20px
        .pro-img
          width 110px
          height 110px
          background #fff
          border 1px solid #ccc
          border-radius 100%
          overflow hidden
          position absolute
          left 50%
          top -55px
          margin-left -55px
          img
            margin 30px auto
        h1
          font-size 16px
          margin-top 70px
          text-align center
          margin-bottom 10px
        p
          font-size 12px
          color #a0a0a0
          line-height 21px

  .exhibition-box img,
  .rates-box img
      margin: auto
</style>
