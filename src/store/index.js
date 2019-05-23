import Vue from 'vue'
import Vuex from 'vuex'
import bilibili from './modules/bilibili'
import schedule from './modules/schedule'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(Vuex)

const store = {
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  actions: {},
  // 请求数据
  mutations: {},
  action: {},
  getters: {},
  modules: {
    bilibili,
    schedule
  }
}

export default new Vuex.Store(store)
