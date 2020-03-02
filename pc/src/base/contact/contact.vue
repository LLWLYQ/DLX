<template>
  <div class="contact MgT70">
    <div class="base-tit-left">
      <h1>联系我们</h1>
    </div>
    <div class="contact-box MgT30" v-if="result[0]">
      <div class="contact-box-left">
          <h1>{{result[0].title}}</h1>
          <p>{{result[0].address}}</p>
          <p>联系人：{{result[0].contact}}</p>
          <p>电话：{{result[0].tel}}</p>
          <p>手机：{{result[0].mobile}}</p>
          <p>邮箱：{{result[0].mail}}</p>
      </div>
      <div class="contact-box-right" v-if="result[1]">
          <h1>{{result[1].title}}</h1>
          <p>{{result[1].address}}</p>
          <p>联系人：{{result[1].contact}}</p>
          <p>电话：{{result[1].tel}}</p>
          <p>手机：{{result[1].mobile}}</p>
          <p>邮箱：{{result[1].mail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Array,
      default: () => []
    }
  }
}
</script>


<style lang="stylus">
  /*联系我们*/
  .contact-box
    display flex
    justify-content space-between
    align-items flex-start
    padding: 0 25px
    div
      flex 0 0 480px
      h1
        font-size 18px
        margin-bottom 28px
      p
        font-size 16px
        margin-bottom 18px
</style>

