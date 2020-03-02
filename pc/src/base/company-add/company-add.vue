<template>
  <div class="login-box company-box">
    <div class="form_Input" >
        <label for="company_name">企业名称：</label>
        <input type="text" v-model="form.company_name" placeholder="请填写您的公司名" required>
        <i>*</i>
    </div>
    <div class="form_Input">
        <label for="username">联系人：</label>
        <input type="text" v-model="form.company_contract" placeholder="请填写您的姓名" required>
        <i>*</i>
    </div>
    <div class="form_Input">
        <label for="username">电话：</label>
        <input type="text" v-model="form.company_tel" placeholder="请填写您的联系电话" required>
        <i>*</i>
    </div>
    <div class="form_Input">
        <label for="files">名片：</label>
        <upload
          :actions="baseURL+'/five/image'"
          @on-success="uploadSuccess"
        />
        <span>上传名片</span>
    </div>
    <p style="color: red;margin:0 0 10px 85px; ">提示:请上传已拍照好的图片</p>
    <div class="form_Input">
        <label for="company_msg">{{companyTextarea}}：</label>
        <textarea v-model="form.company_need"></textarea>
    </div>
    <button class="btn" @click="submit"></button>
  </div>
</template>

<script>
import { baseURL } from '@/utils/axios'
import upload from '@/base/upload/upload'

export default {
  data() {
    return {
      baseURL,
      form: {
        company_name: '',
        company_contract: '',
        company_tel: '',
        company_need: '',
        picId: ''
      }
    }
  },
  props: {
    company: {
      type: Boolean,
      default: false
    },
    companyTextarea: {
      type: String,
      default: '企业需求'
    }
  },
  methods: {
    uploadSuccess(data) {
      this.form.picId = data.id
    },
    submit() {
      const validate = this.form
      if (validate.company_name === '') {
        alert('企业名称不能为空')
      } else if (validate.company_contract) {
        alert('联系人不能为空')
      } else if (validate.company_tel === '') {
        alert('联系人手机号不能为空')
      } else {
        this.$emit('submit', this.form)
      }
    }
  },
  components: {
    upload
  }
}
</script>


<style lang="stylus">
// 登录窗口
  .login-box
      width 470px
      margin 68px auto 100px
    .form_Input
      margin-bottom: 15px
      span
        margin-left 10px
      i
        color red
      label
        font-size 14px
        color #333
        vertical-align top
      input[type="text"]
        width 406px
        line-height 25px
        padding-left 10px
        border 1px #ccc dashed
  /* 企业*/
  .company-box
    label
      display inline-block
      width 80px
      text-align right
    input[type="text"]
      width 330px !important
    textarea
      width 340px
      height 100px
      resize none
      outline none
      padding 8px
      box-sizing border-box
      border 1px #ccc dashed
  .login-box .btn
      display block
      width 100px
      height 35px
      margin 58px auto 0
      background url(http://car.861718.com/images/submit.png) no-repeat
      border none

</style>
