import axios from 'axios'
import qs from 'qs'

// import store from '@/store'
// 配置根路径开发、线上等环境服务端的配置
let root = process.env.VUE_APP_API_ROOT
axios.defaults.baseURL = root
axios.defaults.withCredentials = true // 跨域
axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
// 请求拦截
axios.interceptors.request.use(
  config => {
    /*     config.headers.authKey = store.state.authKey
        config.headers.sessionId = store.state.sessionId */
    return config
  },
  error => {
    console.error('请求拦截捕获到错误', error)
  }
)
// 响应拦截
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return response
    } else {
      if (res.code === 101) {

      } else if (res.code === 600) {

      } else {
        console.error(res.error)
      }
      return Promise.reject(response.data)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default {
  get: (urlName = '', params = {}, config = {}) => {
    return axios.get(urlName, { params, ...config }).then((res) => {
      return res.data
    }).catch((error) => {
      return error
    })
  },
  // 一般的post
  post: (urlName = '', params = {}, config = {}) => {
    return axios.post(urlName, qs.stringify(params), config).then((res) => {
      return res.data
    }).catch((error) => {
      return error
    })
  },
  // 直接传json格式的post
  jsonPost: (urlName = '', params = {}, ) => {
    return axios.post(urlName, params, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.data
    }).catch((error) => {
      return error
    })
  }
}
