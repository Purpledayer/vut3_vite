
<template>
    <a-layout-content>
        <a-layout>
            <setLeftNav />
            <a-layout><router-view v-slot="{ Component }" class="content_box"><transition name="scale" mode="out-in"><component :is="Component"  /></transition></router-view></a-layout>
        </a-layout>
    </a-layout-content>
    
</template>
<script lang="ts" setup name="set">
import setLeftNav from '@/components/setLeftNav.vue';
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