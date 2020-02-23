import Vue from 'vue'
import VueRouter from 'vue-router'
import users from './modules/users'

Vue.use(VueRouter)

const routes = [
  ...users
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
