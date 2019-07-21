'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import App from '../App'

import axios from 'axios'

Vue.use(Router)

// 路由懒加载
const index = () => import('../page/index')
const article = () => import('../page/article/article')
const create = () => import('../page/article/create')
const detail = () => import('../page/article/detail')
const edit = () => import('../page/article/edit')
const about = () => import('../page/about/about')
const login = () => import('../page/user/login')
const profile = () => import('../page/user/profile')

const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/index'
        },
        {
          path: 'index',
          redirect: '/article',
          component: index,
          children: [
            {
              path: '/article',
              component: article
            },
            {
              path: '/article/create',
              component: create
            },
            {
              path: '/article/detail',
              component: detail
            },
            {
              path: '/article/edit',
              component: edit
            },
            {
              path: '/about',
              component: about
            },
            {
              path: '/login',
              component: login
            },
            {
              path: '/profile',
              component: profile,
              meta: {
                requireAuth: true
              }
            }
          ]
        },
        {
          path: '*',
          redirect: '/index'
        }
      ]
    }
  ]
})

let checkToken = async (token) => {
  await axios.get('/api/user/checkauth?token=' + token).then(res => {
    return res.data.status === 1
  })
}

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const token = store.state.token
    if (token) {
      if (checkToken(token)) {
        next()
      } else {
        to.path === '/login' ? next() : next('/login')
      }
    } else {
      let token = window.localStorage.getItem('token')
      if (token) {
        if (checkToken(token)) {
          store.commit('SET_TOKEN', token)
          next()
        } else {
          to.path === '/login' ? next() : next('/login')
        }
      } else {
        to.path === '/login' ? next() : next('/login')
      }
    }
  } else {
    next()
  }
})

export default router
