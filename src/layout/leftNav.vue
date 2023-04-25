<template>
	 <a-layout-sider width="88" relative>
		<a-menu absolute class="left_Nav_box top-1/2 left-1/2 -translate-y-3/2 -translate-x-1/2" text-center color="#868687" v-model:opeKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="vertical" @click="handleClick">
			<template v-for="(item, i) in asideMenu" :key="i">
				<a-menu-item>
					<template #icon><router-link :to="item.path" :class="i"><component :is="protoType?.$antIcons[item.icon]" /></router-link></template>
				</a-menu-item>
			</template>
		</a-menu>
	</a-layout-sider>
</template>
<script lang="ts" setup>
import {reactive, getCurrentInstance } from 'vue';
import type { MenuProps } from 'ant-design-vue';
const state = reactive({selectedKeys: [],openKeys: [],});
const handleClick: MenuProps['onClick'] = menuInfo => {
	console.log('click ', menuInfo);
};
const protoType = getCurrentInstance()?.appContext.config.globalProperties
	//存储导航侧边栏信息
const asideMenu = reactive([
	{title: "index",path: "/",name: "index",key: 1,icon: "HomeOutlined",},
	{title: "首页",path: "/home",name: "home",key: 1,icon: "HomeOutlined",},
	{title: "组件",path: "/module/test",name: "components",key: 2,icon: "HomeFilled",},
	{title: "关于",path: "/about",name: "about",key: 3,icon: "ShareAltOutlined",},
	{title: "瀑布",path: "/waterfall",name: "waterfall",key: 3,icon: "SettingOutlined",},
	{title: "设置",path: "/set/user",name: "sysset",key: 5,icon: "SettingFilled",},
]);

	

</script>
  
<style scoped lang="less">
	.left_Nav_box{
		width: 88px;
		background: transparent !important;
		border: 0px;
		.menu_icon{
			font-size:24px;
			display: inline-block; 
			margin-bottom: 30px;
			margin-left: auto;
		}
		
	}
</style>