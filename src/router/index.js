import Vue from 'vue'
 import axios from 'axios'
import Router from 'vue-router'
import home from '@/components/home'
import admin from '@/components/admin'

Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
