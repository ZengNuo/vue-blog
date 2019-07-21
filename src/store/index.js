'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogined: window.localStorage.getItem('isLogined') || false,
  token: window.localStorage.getItem('token') || ''
}

const mutations = {
  // 登录
  LOGIN (state, data) {
    state.isLogined = true
    state.token = data
    window.localStorage.setItem('isLogined', true)
    window.localStorage.setItem('token', data)
  },
  // 登出
  LOGOUT (state) {
    state.isLogined = false
    state.token = ''
    window.localStorage.clear()
  }
}

const actions = {
  login (context, data) {
    context.commit('LOGIN', data)
  },
  logout (context) {
    context.commit('LOGOUT')
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
