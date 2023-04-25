<template>
    <div>
        <Test msg="this is a vue3 appliaction? hello world"/>
        <router-link to="/about">跳转关于页面</router-link>
    </div>
    
</template>

<script  lang='ts' setup>
    import Test from '@/components/Test.vue'
</script>