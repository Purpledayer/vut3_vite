<template>
    <div>
        <div class="init_box">
            <a-input v-model:value="state.AuthCode" placeholder="输入授权码" />
            <a-button type="primary" @click="initFun()">开始初始化设置</a-button>
        </div>
        <div class="register">
            <a-form :model="formState" name="basic" :label-col="{ span: 12 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item label="Username" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.username" />
                </a-form-item>
                <a-form-item label="Password" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input-password v-model:value="formState.password" />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import {initStatusStore} from '@/sysConfig/store/index'
import {init , InitStatus} from '@/sysConfig/api/sys'

const initStore=initStatusStore();
console.log(initStore.initStatus)
const state:any = reactive({AuthCode: '000004'});
const initFun = ()=>{
    let param = {licenseCode : state.AuthCode};
    init(param).then((res) => {
        console.log(res)
    })
    
}
const InitStatusFun = () => {
    if(initStore.initStatus){

    }
    InitStatus().then((res) => {
        if(res.data.code !== '000'){
            return;
        }
        let data = res.data;//逻辑代码
        console.log(data)
    });
};

InitStatusFun();


interface FormState {  username: string;  password: string;}
const formState = reactive<FormState>({
    username: '',
    password: '',
});
const onFinish = (values: any) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


</script>

<style scoped lang="less">
.register{
    display: none;
}
</style>


<route lang="yaml">
    meta:
      layout: false
</route>