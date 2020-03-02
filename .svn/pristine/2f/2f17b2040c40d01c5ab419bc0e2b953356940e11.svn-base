<template>
  <div class="baseW-1100">
    <Header />
    <!-- 演讲嘉宾 -->
    <guest-list title="演讲嘉宾" :titleLeft="true" :noMore="true" :result="result.now"></guest-list>
    <!-- 往届演讲嘉宾 -->
    <guest-list :titleLeft="true" :noMore="true" :result="result.past"></guest-list>
    <Footer />
  </div>
</template>

<script>
import HttpRequest, { baseURL } from '@/utils/axios'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import GuestList from '@/base/guest/guest'

export default {
  name: 'guest',
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
      HttpRequest.get(`${baseURL}/five/data/guest`).then((res) => {
          console.log(res)
          this.result = res
      })
    }
  },
  components: {
    Header,
    Footer,
    GuestList
  }
}
</script>
