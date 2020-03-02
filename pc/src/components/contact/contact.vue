<template>
  <div class="baseW-1100">
    <Header />
    <contact :result="result.contact" />
    <Footer />
  </div>
</template>

<script>
import HttpRequest, { baseURL } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import Contact from '@/base/contact/contact'

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
      HttpRequest.get(`${baseURL}/five/data/contact`).then((res) => {
          console.log(res)
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
