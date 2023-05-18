<template>
    <a-button type="primary" @click="openNotification">Open the notification box</a-button>
</template>
<script lang="ts" setup>

import  api from "../api/test";
const openNotification = () => {
    api.login.login({username: 'testAdmin',password: 'testPassword'}).then((res) => {
        if(res.data.code !== '000'){
            return;
        }
        let data = res.data;//逻辑代码
        console.log(data)
    });
};
</script>