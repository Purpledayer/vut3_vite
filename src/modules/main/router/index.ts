import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

let routes: RouteRecordRaw[] = []


generatedRoutes.forEach(v => {
    console.log(v?.meta?.layout,v)
    routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v)
})
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

