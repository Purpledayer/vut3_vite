<template>
    <a-layout-header class="header" rounded-2xl mb-3 h-13 leading-13>
        <div float-right>
            <a-switch v-model:checked="checked" checked-children="绿" un-checked-children="黄" @change="change"  align-middle />
            <label  m-l-4>2023-05-09-14:00</label>
            <label p-l-4 p-r-4 b-r-1 b-l-1 m-r-4 m-l-4>星期五</label>
            <a-dropdown align-middle>
                <a class="ant-dropdown-link">张三<DownOutlined></DownOutlined></a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item><a href="javascript:;">退出</a></a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </a-layout-header>
</template>
<script setup lang="ts">
    import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
    import LocalCache from '@/utils/cache'
    import { reactive, ref } from "vue";
    import { DownOutlined } from '@ant-design/icons-vue';
    const checked = ref<boolean>(false);
    // 切换主题回调
    const obj = reactive({	theme: LocalCache.getCache("theme") ?? ""});
    if(obj.theme == '1'){
        toggleTheme({scopeName: "theme-green",});
        checked.value = true;
    }else{
        toggleTheme({scopeName: "theme-default",});
        checked.value = false;
    }
    const change = (value:any) => {
        // 如果开关打开，就切换为绿色主题，否则默认黄色主题
        if (value) {
            toggleTheme({scopeName: "theme-green",});
            console.log("已切换为绿色主题");
            LocalCache.setCath('theme', '1')
        } else {
            toggleTheme({scopeName: "theme-default",});
            console.log("已切换为默认主题");
            LocalCache.setCath('theme', '0')
        }
    };


</script>
<style lang="less" >

</style>