/*
 * @description: 请求封装
 * @Author: Jay
 * @Date: 2022-06-08 11:41:36
 * @LastEditors: Jay
 * @LastEditTime: 2022-06-08 15:29:38
 */
// 导入axios
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

import { message  } from 'ant-design-vue';
// 请求头

// 加载配置

 

// 请求配置
export const createAxios = ( config?: AxiosRequestConfig,): AxiosInstance => {
  const instance = axios.create({
    // 请求头
    baseURL: '',
    // 超时配置
    timeout: 1000,
    // 跨域携带cookie
    withCredentials: true,
    // 自定义配置覆盖基本配置
    ...config,
  })

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config: any) => {
      // console.log("请求拦截器config:", config);
      // 加载动画

      // 判断是否有token 根据自己的需求判断
      const token = config.token
      window.console.log('判断是否有token', token)
      if (token !== undefined) {
        // 如果要求携带在参数中
        config.params = Object.assign({}, config.params, token)
        // 如果要求携带在请求头中
        // config.headers = Object.assign({}, config.headers, operate.uploadParameters())
      }
      return config
    },
    (error) => {
      // 请求错误
      return Promise.reject(error)
    },
  )

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      // console.log("响应拦截器response:", response);
      // 关闭加载 动画
      // 返回参数
      return response.data
    },
    (error) => {
      /** *** 接收到异常响应的处理开始 *****/
      if (error && error.response) {
        // 1.公共错误处理
        // 2.根据响应码具体处理
        switch (error.response.status) {
          case 400:
            error.message = '错误请求'
            break
          case 401:
            error.message = '未授权，请重新登录'
            break
          case 403:
            error.message = '拒绝访问'
            break
          case 404:
            error.message = '请求错误,未找到该资源'
            // window.location.href = '/NotFound'
            break
          case 405:
            error.message = '请求方法未允许'
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器端出错'
            break
          case 501:
            error.message = '网络未实现'
            break
          case 502:
            error.message = '网络错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网络超时'
            break
          case 505:
            error.message = 'http版本不支持该请求'
            break
          default:
            error.message = `连接错误${error.response.status}`
        }
      }
      else {
        // 超时处理
        if (JSON.stringify(error).includes('timeout'))
          error.message = '服务器响应超时，请刷新当前页'

        else
          error.message = '连接服务器失败'
      }
      // 提示
      message.error(error.message);
      /** *** 处理结束 *****/
      return Promise.resolve(error.response)
    },
  )

  return instance
}
