import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';                              // 全局注册antd-ui组件
import 'ant-design-vue/dist/antd.less';                         // 引入antd的less样式
import { createPinia } from 'pinia'                             // 引入pinia
import router from "./router";
import CScrollbar from 'c-scrollbar';                           // 加载自定义滚动条

import V3waterfall from 'v3-waterfall';                          // 加载瀑布流插件
import 'v3-waterfall/style.css';                                 // 加载瀑布流插件样式
import * as antIcons from '@ant-design/icons-vue';               // 引入图标库
import './style.less';

import '@unocss/reset/tailwind.css';
import 'uno.css';

import * as echarts from 'echarts';


import '@/assets/iconfont/iconfont.css';
import '@/assets/iconfont/iconfont.js';


 



 



const app = createApp(App);

// // 注册组件
// Object.keys(antIcons).forEach(key => {
//     app.component(key, antIcons[key])
// })
// 添加到全局


app.config.globalProperties.$antIcons = antIcons
app.config.globalProperties.$echarts = echarts
app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(CScrollbar)
app.use(V3waterfall)
app.mount('#app');


    

