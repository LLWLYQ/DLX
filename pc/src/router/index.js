import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  history: false,
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../components/index/index.vue')
    },
    {
      path: '/metting',
      name: 'metting',
      component: () => import('../components/metting/metting.vue')
    },
    {
      path: '/guest',
      name: 'guest',
      component: () => import('../components/guest/guest.vue')
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('../components/show/show.vue')
    },
    {
      path: '/review',
      name: 'review',
      component: () => import('../components/review/review.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../components/chart/chart.vue')
    },
    {
      path: '/company_zanzhu',
      name: 'company_zanzhu',
      component: () => import('../components/company_zanzhu/company_zanzhu.vue')
    },
    {
      path: '/company_login',
      name: 'company_login',
      component: () => import('../components/company_login/company_login.vue')
    },
    {
      path: '/guest_login',
      name: 'guest_login',
      component: () => import('../components/guest_login/guest_login.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/contact/contact.vue')
    }
  ]
})
