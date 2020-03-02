// 服务端渲染入口
import createApp from './app'

// 获取参数
const { app, router } = createApp()


// 路由初始化完毕后绑定Vue实例到节点
router.onReady(() => {
  app.$mount('#app')
})
