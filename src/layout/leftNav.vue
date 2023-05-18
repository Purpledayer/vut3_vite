<template>
    <a-layout-sider width="80" class="boxShadow-lg nav_box" style="background: transparent !important;" :collapsed="true">
       <div bg-white rounded-xl relative h-full w-20>
           <!-- <a-menu absolute  class="left_Nav_box top-10 left-1/2  -translate-x-1/2" text-center color="#868687" v-model:selectedKeys="state.selectedKeys" mode="inline" @click="handleClick" dark > -->
           <a-menu absolute  class="left_Nav_box top-10 left-1/2  -translate-x-1/2" text-center color="#868687" v-model:selectedKeys="state.selectedKeys" mode="inline" dark >
               <a-menu-item v-model:selectedKeys="state.selectedKeys" v-for="(item, i) in asideMenu" :key="item.key">
                   <template #icon><router-link :to="item.path" :class="i"><component :is="protoType?.$antIcons[item.icon]" /></router-link></template>
                   <span>{{ item.title }}</span>
               </a-menu-item>
           </a-menu>
		   <div bottom-7 absolute left-0 right-0 text-center>
				<a-tooltip placement="rightTop">
					<template #title>
						<p><a href="javascript:;">个人中心</a></p>
						<p><a href="javascript:;">退出</a></p>
					</template>
					<a-avatar size="large"><template #icon><UserOutlined /></template></a-avatar>
				</a-tooltip>
				<p m-t-8>12:23</p>
				<p>2022/12/12</p>
		   </div>
       </div>
   </a-layout-sider>
</template>
<script lang="ts" setup>
import {  reactive } from 'vue';
// import type { MenuProps } from 'ant-design-vue';
import { UserOutlined} from '@ant-design/icons-vue';
const state:any = reactive({selectedKeys: ['sub0']});
// const handleClick: MenuProps['onClick'] = menuInfo => {
//    console.log(menuInfo)
// };
const protoType = getCurrentInstance()?.appContext.config.globalProperties
const asideMenu = reactive([
  {title: "数据大屏",path: "/",name: "index",key: 'sub0',icon: "DesktopOutlined",},
  {title: "监测看板",path: "/about",name: "about",key: 'sub3',icon: "HomeOutlined",},
  {title: "智慧站房",path: "/waterfall",name: "waterfall",key: 'sub4',icon: "ShareAltOutlined",},
  {title: "系统设置",path: "/set/survey",name: "sysset",key: 'sub5',icon: "SettingOutlined",},
  {title: "组件",path: "/module/test",name: "components",key: 'sub2',icon: "AppstoreOutlined",},
]);

</script>
<style scoped lang="less">
.left_Nav_box{
   width: 5rem;
   border: 0px;
   box-shadow: none !important;
   background: transparent !important;
   .menu_icon{
       font-size:24px;
       display: inline-block; 
       margin-bottom: 30px;
       margin-left: auto;
   }
} 
</style>
 