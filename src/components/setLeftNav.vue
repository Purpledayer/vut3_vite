<template>
    <a-layout-sider mr-4 rounded-xl p-t-11 p-l-3 p-r-3>
        <a-menu id="set_menu_box" v-model:selectedKeys="selectedKeys" mode="inline" light class="sssss">
            <a-menu-item-group v-for="(item, i) in asideMenu" :key="i" :title="item.title"> 
                <a-menu-item  v-for="(child,j) in item.child" :key="child.key" :class="j"><router-link :to="child.path">{{ child.title }}</router-link></a-menu-item>
            </a-menu-item-group>
        </a-menu>
    </a-layout-sider>
</template>
<script lang="ts" setup name="set">
import { ref } from 'vue';

import {menu} from '@/sysConfig/api/sys'
const InitStatus = () => {
    menu().then((res) => {
        console.log(res)
    });
};

InitStatus();
    
    
    const selectedKeys = ref<string[]>(['sub0']);





    const asideMenu = reactive([
        {
            title: "系统配置",
            key:'title0',
            child:[
                    {title: "辖区监测点管理",path: "/set/survey",name: "survey",key: 'sub0'},
                    {title: "网关主机管理",path: "/set/gateway",name: "gateway",key: 'sub1'},
                    {title: "传感器管理",path: "/set/sensor",name: "sensor",key: 'sub2'},
                    {title: "设备ID管理",path: "/set/device",name: "device",key: 'sub3'},
                    {title: "报表管理",path: "/set/statement",name: "statement",key: 'sub4'},
                    {title: "用户管理",path: "/set/user",name: "user",key: 'sub5'},
                    {title: "微服务模块管理",path: "/set/MSA",name: "MSA",key: 'sub6'},
            ],
        },
        {
            title: "业务配置",
            key:'title1',
            child:[
                {title: "系统通知",path: "/set/notice",name: "notice",key: 'sub7'},
                {title: "权限管理",path: "/set/power",name: "power",key: 'sub8'},
                {title: "字典管理",path: "/set/dictionary",name: "dictionary",key: 'sub9'},
                {title: "企业参数设置",path: "/set/enterprise",name: "enterprise",key: 'sub10'},
                {title: "日志分析",path: "/set/logs",name: "logs",key: 'sub11'},
                {title: "系统监控",path: "/set/monitor",name: "monitor",key: 'sub12'},
            ],

        },
    ]);
</script>
  
<style scoped lang="less" >
.scale-enter-active,.scale-leave-active {transition: all 0.3s ease;}
.scale-enter-from,.scale-leave-to {opacity: 0;transform: scale(0.9);}
#set_menu_box{
    background: transparent;
    li{
        background: rgb(255, 255, 255);
        box-shadow: 0px 1px 20px rgba(136, 136, 136, 0.25);
        border-radius:8px;
    }
}
</style>