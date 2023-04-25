<template>
    <a-layout>
        <!-- <Menu :contentHeight="contentHeight-50"/> -->
            <a-layout style="padding: 0 24px 24px">
                <a-row style="width: 100%;height: 500px;" :gutter="16">
                    <a-col :style="`height:${contentHeight-50}px`" :span="5" border-2>
                        <c-scrollbar width="100%" height="500px">
                            <ul>
                            <li><img src="@/assets/vue.svg"></li>
                            <li><img src="@main/assets/images/vite.svg"></li>
                            <li><button class="btn">asdd</button></li>
                            <li>serwerwerwerwer</li>
                            <li>serwerwerwerwer</li>
                            <li>serwerwerwerwer</li>
                            <li>serwerwerwerwer</li>
                            <li>serwerwerwerwer</li>
                            </ul>
                        </c-scrollbar>
                    </a-col>
                    <a-col :style="`height:${contentHeight-50}px`" :span="6">
                        <div style="width: 100%;height: 170.73px;background: rgb(255, 255, 255);border-radius:9px;">
                            <a-progress type="circle" :percent="75"><template #format="percent"><span style="color: red">{{ percent }}</span></template></a-progress>
                        </div>
                    </a-col>
                    <a-col :style="`height:${contentHeight-50}px`" :span="13">
                        <waterfall/>
                    </a-col>
                </a-row>
            </a-layout>
    </a-layout>
    
    
</template>
<script lang="ts" setup>
import waterfall from '@/components/waterfall.vue';
// import Menu from '@/layout/menu.vue'; 
defineProps<{ contentHeight: number }>()
</script>
<style scoped>

</style>