<template>
  <div class="baseW-750">
    <Header />
    <div class="loginBox MgT30 Mg15">
      <div class="base-tit-left">
          <h1>企业报名</h1>
      </div>
    </div>
    <!-- 表单 -->
    <company-add @submit="submit" />
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
import CompanyAdd from '@/base/company-add/company-add'

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
      formData.append('company_name', form.company_name)
      formData.append('company_contract', form.company_contract)
      formData.append('company_tel', form.company_tel)
      formData.append('company_need', form.company_need)
      formData.append('picId', form.picId)
      axios.post(`${baseURL}/five/company`, formData, Headers).then((res) => {
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
    CompanyAdd
  }
}
</script>
