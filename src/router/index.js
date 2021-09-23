import Vue from 'vue'
import VueRouter from 'vue-router'
import UserTv from '../views/UserTv';
Vue.use(VueRouter)

const routes = [
  {
    path: '/:name',
    name: 'tv',
    component: UserTv,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
