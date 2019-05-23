import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
// import qs from 'qs'
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
const namespaced = true
const state = {}
// 实例
// const instance = axios.create({
//   baseURL: 'http://10.10.10.190:8899/api/pc/',
//   timeout: 5000,
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded'
//   }
//   // transform the data
//   // transformRequest: data => {
//   //   return data instanceof Object

//   // },
//   // paramsSerializer: function () {
//   //   return qs.stringify({})
//   // }
// })
// // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const actions = {
  getdata(context) {
    axios.get('http://10.10.10.190:8899/api/pc/base_classtime_listClassNum').then((res) => {
      context.commit('getdata', res)
    })
  }
}

const mutations = {
  // axios
  // .post('http://10.10.10.190:8899/api/pc/base_classtime_listClassNum', {
  //   "params": {
  //     "camousid": 1615,
  //     "termcode": "181902"
  //   },
  //   "readonly": true
  // }, {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // }).then(resopnse) => (this.info = resopnse)
  // getdata(state, res) {
  //   state.data = res
  //   console.log(state.data)
  // }
}

const getters = {}

export default {
  namespaced,
  mutations,
  state,
  actions,
  getters
}
