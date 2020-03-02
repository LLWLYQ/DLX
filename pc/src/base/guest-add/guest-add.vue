<template>
  <div class="login-box">
      <div class="form_Input">
        <label for="username">姓名：</label>
        <input type="text" placeholder="请填写您的姓名" required v-model="form.username">
      </div>
      <div class="form_Input">
          <label for="username">电话：</label>
          <input type="text" placeholder="请填写您的联系电话" v-model="form.phone" required>
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
        username: '',
        phone: '',
        picId: ''
      }
    }
  },
  methods: {
    uploadSuccess(data) {
      this.form.picId = data.id
    },
    submit() {
      const validate = this.form
      if (validate.username === '') {
        alert('用户名不能为空')
      } else if (validate.mobile === '') {
        alert('手机号不能为空')
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
  .login-box .btn
      display block
      width 100px
      height 35px
      margin 58px auto 0
      background url(http://car.861718.com/images/submit.png) no-repeat
      border none

</style>
