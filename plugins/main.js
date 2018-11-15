import Vue from 'vue'
import axios from 'axios'
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error);
})
Vue.prototype.$axios = axios


import VueProgressBar from 'vue-progressbar' 
export default () => {
  Vue.use(VueProgressBar, {
    color: '#53a0d0',
    failedColor: 'red',
    height: '2px'
  })
}
