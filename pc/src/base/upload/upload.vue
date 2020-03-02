<template>
  <div class="upload-box">
    <button type="button" class="upload" >
        <em>+</em>
        <a href="javascript:;"></a>
        <input id="files" type="file" name="file" @change="handleChange">
    </button>
    <img :src="result.url" alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data() {
    return {
      result: ''
    }
  },
  props: {
    actions: {
      type: String,
      default: ''
    }
  },
  methods: {
    uploadFiles(data) {
      const formData = new FormData()
      formData.append('file', data[0])
      const header = {
        headers: {
          // 'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data'
        }
      }
      axios.post(this.actions, formData, header).then((res) => {
        this.result = res.data
        this.$emit('on-success', this.result)
      })
    },
    // 上传接口
    handleChange(e) {
      const files = e.target.files;
      if (!files) return;
      this.uploadFiles(files);
    }
  }
}
</script>

<style lang="stylus">
.upload-box
  display inline-block
  .upload
    font-size 32px
    width 90px
    height 60px
    position relative
    background none
    border 1px #ccc dashed
    vertical-align middle
    em
      font-style: normal
    #files
      position absolute
      left 0
      top 0
      opacity 0
      width 100%
      height 100%
  img
    display inline-block
    width 90px
    height 60px
    vertical-align middle
</style>
