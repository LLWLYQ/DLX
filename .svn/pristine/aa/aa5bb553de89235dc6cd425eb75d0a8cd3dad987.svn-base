<template>
  <div class="baseW-750">
    <Header />
    <div class="loginBox MgT30 Mg15">
      <div class="base-tit-left">
          <h1>个人报名</h1>
      </div>
    </div>
    <!-- 表单 -->
    <guest-add @submit="submit" />
    <!-- 联系我们 -->
    <Contact :result="result.contact" />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import HttpRequest, { baseURL, Headers } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import Contact from '@/base/contact/contact'
import GuestAdd from '@/base/guest-add/guest-add'

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
      HttpRequest.get(`${baseURL}/five/data/contact`).then((res) => {
        console.log(res)
        this.result = res
      })
    },
    submit (form) {
      const formData = new FormData()
      formData.append('username', form.username)
      formData.append('phone', form.phone)
      formData.append('picId', form.picId)
      axios.post(`${baseURL}/five/viewer`, formData, Headers).then((res) => {
        if (res.code === 1) {
          alert(res.msg)
        }
        if (res.code === 2) {
          alert(res.msg)
        }
      })
    }
  },
  components: {
    Header,
    Footer,
    Contact,
    GuestAdd
  }
}
</script>
