
import { createAxios } from '@/sysConfig/utils/request'
const request = createAxios()

let api= {
	login: {
		login : (data: any): Promise<any> => request({url: 'auth/login/login', method: 'post', data: data})
	}
}

export default api;


