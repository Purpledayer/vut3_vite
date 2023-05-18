
<template>
    <a-layout-content>
        <a-layout>
            <a-layout-sider mr-4 rounded-xl p-t-11 p-l-3 p-r-3>
                <a-menu id="set_menu_box" v-model:selectedKeys="selectedKeys" mode="inline" light class="sssss">
                    <a-menu-item-group v-for="(item, i) in asideMenu" :key="i"> 
                        <a-menu-item  v-for="(child,j) in item.child" :key="j" :class="j"><router-link :to="child.path">{{ child.title }}</router-link></a-menu-item>
                    </a-menu-item-group>
                </a-menu>
            </a-layout-sider>
            <a-layout><router-view v-slot="{ Component }" class="content_box"><transition name="scale" mode="out-in"><component :is="Component"  /></transition></router-view></a-layout>
        </a-layout>
    </a-layout-content>
    
</template>
<script lang="ts" setup name="set">
 import { ref } from 'vue';
const selectedKeys = ref<string[]>(['sub0']);
const asideMenu = reactive([  
    {
        title: "系统配置",
        key:'title0',
        child:[
                {title: "组件",path: "/module/test",name: "survey",key: 'sub0'},
                {title: "桑葚图",path: "/module/sankey",name: "gateway",key: 'sub1'},
        ],
    },
]);
</script>
  
<style scoped lang="less" >
.scale-enter-active,.scale-leave-active {transition: all 0.3s ease;}
.scale-enter-from,.scale-leave-to {opacity: 0;transform: scale(0.9);}
#set_menu_box{
    li{
        background: rgb(255, 255, 255);
        box-shadow: 0px 1px 20px rgba(136, 136, 136, 0.25);
        border-radius:8px;
    }
}
</style>