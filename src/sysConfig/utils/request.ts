/*
 * @description: 请求封装
 * @Author: Jay
 * @Date: 2022-06-08 11:41:36
 * @LastEditors: Jay
 * @LastEditTime: 2022-06-08 15:29:38
 */
// 导入axios
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import {useStore} from '../store/index'
import { message  } from 'ant-design-vue';
// 请求配置
export const createAxios = ( config?: AxiosRequestConfig,): AxiosInstance => {
  	const instance = axios.create({
		// 请求头
		baseURL: import.meta.env.VITE_APP_API,
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
			// 统一设置用户身份 token
			const store = useStore()

			if (store.user && store.user.token) {
				config.headers["Authorization"] = "Bearer " + `${store.user.token}`;
				// (config.headers as AxiosRequestHeaders).Authorization = `${store.user.token}`
			} 
			 
			return config
		},(error) => {
			// 请求错误
			return Promise.reject(error)
		},
	)
	// 添加响应拦截器
	instance.interceptors.response.use(
		(response) => {
			console.log(response.data)
			const { code, error } = response.data;
			if(code === '000'){
				return response.data;
			}else if( code == '001' ){
				message.error(error);
				/** *** 处理结束 *****/
				// location.href = "/login";
				return Promise.resolve(response)
			}else{
				message.error(error);
				/** *** 处理结束 *****/
				return Promise.resolve(response)
			}
		},
	)
  	return instance
}
