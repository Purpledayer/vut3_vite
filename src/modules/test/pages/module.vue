<template>
    <a-layout>
        <a-layout-content style="padding: 0 50px">
            <a-layout style="padding: 24px 0;">
                <a-layout-sider  :trigger="null" collapsible>
                    <a-menu id="dddddd" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline" >
                        <a-sub-menu key="sub1">
                        <!-- <a-sub-menu key="sub1" @titleClick="titleClick"> -->
                            <template #title>Navigation One</template>
                            <a-menu-item-group key="g1">
                                <a-menu-item key="1"><router-link to="/module/test">组件</router-link></a-menu-item>
                                <a-menu-item key="2"><router-link to="/module/sankey">桑葚图</router-link></a-menu-item>
                            </a-menu-item-group>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout><router-view v-slot="{ Component }" class="content_box"><transition name="scale" mode="out-in"><component :is="Component"  /></transition></router-view></a-layout>
            </a-layout>
        </a-layout-content>
    </a-layout>
</template>
<script lang="ts" setup>
import {  ref } from 'vue';
    
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
<style>
    #components-layout-demo-top-side .logo {
        float: left;
        width: 120px;
        height: 31px;
        margin: 16px 24px 16px 0;
        background: rgba(255, 255, 255, 0.3);
    }
  
    .ant-row-rtl #components-layout-demo-top-side .logo {
        float: right;
        margin: 16px 0 16px 24px;
    }
  
    .site-layout-background {
        background: #fff;
    }

    .ant-layout-sider-collapsed{min-width: 10px !important;max-width: 10px !important;}
  </style>