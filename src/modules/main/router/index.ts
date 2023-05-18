import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { message  } from 'ant-design-vue';

import {useStore} from '@/sysConfig/store'

let routes: RouteRecordRaw[] = []


generatedRoutes.forEach(v => {
    routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v)
})
const router = createRouter({
    history: createWebHistory(),
    routes
})
/**
 * 路由守卫
 */

// if (useSettingsOutsideStore().app.routeBaseOn === 'filesystem') {
//     constantRoutes = generatedRoutes.filter(item => {
//         return item.meta?.enabled !== false && item.meta?.constant === true
//     })
//     asyncRoutes = setupLayouts(generatedRoutes.filter(item => {
//         return item.meta?.enabled !== false && item.meta?.constant !== true && item.meta?.layout !== false
//     }))
// }

router.beforeEach((to,from,next) => {
	const store = useStore()
	if (!router.hasRoute(to.name!)) {
		router.push("/404");
		return;
	}else{
		if (to.name == 'init' || to.name == 'login' || to.name == '404') {
			// 登录或者注册才可以往下进行
			next();
		} else {
			// 获取 token
			// const token = localStorage.getItem('Authorization'); 
			// token 不存在
			if (!store.user) {
				// if (to.meta.requiresAuth && !store.user) {
				message.error('您还没有登录，请先登录');
				next('/login');
			} else {
				next();
			}
		}
	}        
});
   
   
router.onError((handler) => {
	console.log("error:", handler);
});

export default router

