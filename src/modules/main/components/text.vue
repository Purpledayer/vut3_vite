<template>
    <div id="element"></div>
</template>
 
<script lang="ts" setup>
import TypeIt from "typeit";
const instance: any = ref()
onMounted(() => {
    instance.value = new (TypeIt as any)('#element', {speed: 180,lifeLike: true,html: true,cursor:true,cursorChar:'_',waitUntilVisible: true,})
    .type("您好，欢迎回来！我是小微，一直在为您监控所有的监测点。", { delay: 500 })
    .type("目前，我很高兴地告诉您，一切都很正常，一切都在我们可控的范围之内。", { delay: 100 }).go();
})
 
</script>
 
<style>
#element {
    width: 100%;
    background: #1e1f22;
    color: #d5dadd;
}
</style>