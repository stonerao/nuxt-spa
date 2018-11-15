import Vue from 'vue'
import axios from 'axios'
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error);
})
Vue.prototype.$axios = axios
export default () => {
  
}
