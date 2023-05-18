<template>
    <a-layout>
        <a-row style="width: 100%;height: 500px;" :gutter="16">
            <a-col :style="`height:${contentHeight-50}px`" :span="5" border-2>
                <c-scrollbar width="100%" height="500px" >
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
                <a-button type="primary" @click="openNotification">Open the notification box</a-button>
                <!-- <Typed :options="options"><h1 class="typing"></h1></Typed> -->
                <txt></txt>
            </a-col>
            <a-col :style="`height:${contentHeight-50}px`" :span="13">
                <waterfall/>
            </a-col>
        </a-row>
    </a-layout>
</template>
<script lang="ts" setup>
import waterfall from '@/components/waterfall.vue';
import { notification } from 'ant-design-vue';
import txt from '@main/components/text.vue'

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:'I will never close automatically. I will be close automatically. I will never close automatically.',
        duration: 0,
    });
};
defineProps<{ contentHeight: number }>()
</script>
<style scoped>

</style>