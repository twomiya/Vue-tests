import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
// Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ]
})