import axios from 'axios'
import qs from 'qs'
<%_ if (cookiesToken) { _%>
import { getToken, removeToken } from './auth'
<%_ } _%>


<%_ if (cookiesToken) { _%>
  const TOKEN_HEADER = 'token'
<%_ } _%>

const BASE_URL = process.env.API_BASEURL
const REQUEST_TIMEOUT = 60000

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    <%_ if (cookiesToken) { _%>
    config.headers[TOKEN_HEADER] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    <%_ } _%>
    if(config.headers['Content-Type'].indexOf('application/json') === -1&&config.data){
      config.data = qs.stringify(config.data) // qs处理非application/json的请求
    }
    return config
  },
  error => {
    // 处理请求错误
    console.error(error) // for debug
    Promise.reject(error)
  }
)

const CODE_SUCCESS = 0 // 成功标识 可修改
const CODE_SOMEERROR = 500 // 错误标识 这个变量是demo 可更换
<%_ if (cookiesToken) { _%>
const CODE_TOKENIVALID = 401 // token无效错误标识  可更换
<%_ } _%>

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    switch (res.code) {
      case CODE_SUCCESS:
        return res
      <%_ if (cookiesToken) { _%>
      case CODE_TOKENIVALID: // token无效
        removeToken()
        return Promise.reject(res)
      <%_ } _%>
      case CODE_SOMEERROR: // 可以捕获需要特殊处理的错误
        return Promise.reject(res)
      default:
        return Promise.reject(res)
    }
  },
  err => {
    console.error('response error:', err) // 处理请求错误
    return Promise.reject(err)
  }
)

export default service
