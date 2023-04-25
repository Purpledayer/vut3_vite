

<script  lang='ts' setup>
    import { ref } from 'vue'
    const demo = ref('测试')
    defineProps<{ contentHeight: number }>()
</script>

<template>
    <div>
        <h1>我是关于页面 {{ demo }}</h1>
        <router-link to="/home">跳转首页页面</router-link>
    </div>
   
</template>
