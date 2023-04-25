<template>
    <a-layout-header class="header">
        <a-row style="margin-bottom:16px;">
            <a-col :span="12"><div>col-12</div></a-col>
            <a-col :span="12"><div><a-switch v-model:checked="checked" checked-children="绿" un-checked-children="黄" @change="change"  /></div></a-col>
        </a-row>
    </a-layout-header>
</template>
<script setup lang="ts">
    import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
    import LocalCache from '@/utils/cache'
    import { reactive, ref } from "vue";
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