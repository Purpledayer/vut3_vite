
<template>
    <a-layout class="layoutClass">
		<a-layout-content style="padding-right:50px">
			<a-layout style="padding: 24px 0;">
                <a-layout-sider>
                    <!-- <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" @click="handleClick"> -->
                    <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" >
                        <a-sub-menu key="sub1">
                        <!-- <a-sub-menu key="sub1" @titleClick="titleClick"> -->
                            <template #title>Navigation One</template>
                            <a-menu-item-group key="g1">
                                <template #title>Item 1</template>
                                <a-menu-item key="1"><router-link to="/set/gateway">test</router-link></a-menu-item>
                                <a-menu-item key="2"><router-link to="/set/user">user</router-link></a-menu-item>
                            </a-menu-item-group>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
				<a-layout><router-view v-slot="{ Component }" class="content_box"><transition name="scale" mode="out-in"><component :is="Component"  /></transition></router-view></a-layout>
			</a-layout>
		</a-layout-content>
	</a-layout>
    
</template>
<script lang="ts" setup name="set">
    import { ref, watch } from 'vue';
    // import type { MenuProps } from 'ant-design-vue';
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    // const handleClick: MenuProps['onClick'] = e => {
    //     console.log('click', e);
    // };
    // const titleClick = (e: Event) => {
    //     console.log('titleClick', e);
    // };
    watch(() => openKeys,val => {
        console.log('openKeys', val);
    });
</script>
  
<style scoped lang="less" >
    .scale-enter-active,.scale-leave-active {transition: all 0.3s ease;}
    .scale-enter-from,.scale-leave-to {opacity: 0;transform: scale(0.9);}
</style>