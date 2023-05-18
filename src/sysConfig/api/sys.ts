
import { createAxios } from '@/sysConfig/utils/request'
const request = createAxios()

export const init = (params: any): Promise<any> => request.get('/auth/sso/check/license/code', { params })
export const InitStatus = (): Promise<any> => request.get('/auth/sso/eemp/module/init/status')
export const login = (data:any): Promise<any> => request.post('/auth/login/login',data)
export const register = (data: any) =>request.post("/auth/sso/main/co/register", data);

 

export const menu = (): Promise<any> => request.get('/web/saas/menu/node/list')
