// 创建服务端vue模板
import Vue from 'vue'
import VueRouter from 'vue-router' // 路由
import createRouter from './router/index' // 路由初始化
import App from './views/app'
import './common/styles/base.styl'

// 注册插件和组件
Vue.use(VueRouter)


// 每次都要返回一个新的实例 避免冲突
export default () => {
  // 实例化所需要参数
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  // 最后返回3个参数
  return { app, router }
}
