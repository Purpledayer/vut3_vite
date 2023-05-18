<script lang="ts" setup name="device">
import {  ref } from 'vue';
import { PlusOutlined ,EditOutlined ,CloseOutlined} from '@ant-design/icons-vue';

const drawerText = ref();

const cardTextClick = (data:any)=>{
    drawerText.value = 'edit';
    visible.value = true;
}

const visible = ref<boolean>(false);

// const afterVisibleChange = (bool: boolean) => {
//   visible.value = true;
// };
const add =()=>{
    drawerText.value = 'add';
    visible.value = true;
}
const edit = ()=>{
    drawerText.value = 'edit';
    visible.value = true;
}
const deleteFun = ()=>{
    console.log(444)
}
const close =()=>{
    visible.value = false;
}

const visible1 = ref<boolean>(false);
    const loading = ref<boolean>(false);
const showModal = () => {
    visible1.value = true;
};

const handleOk1 = () => {
    loading.value = true;
    setTimeout(() => {
    loading.value = false;
    visible1.value = false;
    }, 2000);
};

const handleCancel = () => {
    visible1.value = false;
};


interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
</script>
<template>
    <a-layout >
        <div style="padding-top: 40px;">
        <div style="color: rgb(51, 51, 51);font-size: 18px;font-weight: 500;line-height: 27px;letter-spacing: 0px;text-align: left; margin-bottom: 30px;">微服务模块管理</div>
        <a-row :gutter="12">
            <a-col :span="6" style="margin-bottom:12px;" @click.stop="add">
                <a-card :bordered="false"  hoverable class="card_style" text-center  style="padding-top:1.3rem">
                    <p><plus-outlined class="text-4xl font-normal color-[#00BCC3]"></plus-outlined></p>
                    <p m-t-6>添加设备ID</p>
                </a-card>
            </a-col>
            <a-col :span="6" v-for="i in 8" :key="i" style="margin-bottom:12px" @click="cardTextClick(i)"  >
                <a-card :bordered="false"  hoverable class="card_style">
                    <template #title><span text-base font-semibold>模块名称模块名称模块名称</span></template>
                    <template #extra><edit-outlined class="text-lg" @click.stop="edit" /><close-outlined class="text-lg m-l-1" @click.stop="deleteFun" /></template>
                    <div class="card_body">
                        <p m-t-2 text-sm>厂家：海康威视/监控摄像头{{ i }}</p>
                    </div>
                    <template #actions><a text-left text-sm>2023/09/08 12:23</a></template>
                </a-card>
            </a-col>
        </a-row>
        <a-drawer v-model:visible="visible" class="custom-class" placement="right" @close="close" :mask="false" size="large"> 
            <div relative h-full>
                <div class="drawer_title" p-b-5 border-b-1>
                    <p><i class="iconfont icon-zhuji"></i><label m-l-3 text-base>主机名称2</label></p>
                </div>  
                <div border-1 rounded-xl p-6 m-t-8>
                    <ul text-sm color="#666">
                        <li color="#333333" text-base font-semibold m-b-1>设备名称设备名称设备名称</li>
                        <li m-b-3>ID：234565432</li>
                        <li >设备参数：ertytrewer</li>
                        <li >设备厂家：ABB</li>
                        <li >厂家电话：13232223454</li>
                        <li >生产日期：2022-09-09</li>
                        <li >投运日期：2023-01-09</li>
                        <li color="#00BCC3" m-t-4>复制设备ID</li>
                    </ul>
                </div>     
                <a-button type="primary" bottom-1 absolute right-0 @click="showModal">修改</a-button>      
            </div>
        </a-drawer>
        <a-modal v-model:visible="visible1" width="720px">
            <template #title>
                <div text-center> <span text-lg antialiased font-medium >替换传感器</span></div>
            </template>
            <div class="body_content_box">
                <a-form :model="formState" name="basic" :label-col="{ span: 5 }" :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed"  >
                    <a-form-item label="设备名称" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>
                    <a-form-item label="设备名称" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>
                    <a-form-item label="设备参数" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>

                    <a-form-item label="设备厂家" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>

                    <a-form-item label="厂家电话" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>

                    <a-form-item label="生产日期" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>

                    <a-form-item label="投运日期" name="username"> 
                        <a-input v-model:value="formState.username" placeholder="请输入内容" />
                    </a-form-item>
                    <template #footer>
                        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                            <a-button key="submit" html-type="submit" type="primary" :loading="loading" @click="handleOk1" h-9>确定</a-button>
                            <a-button key="back" @click="handleCancel" h-9>取消</a-button>
                        </a-form-item>
                    </template>
                   
                </a-form>       
            </div>
           
        </a-modal>
    </div>
    </a-layout>
    
</template>
<style lang="less" scoped>

.scale-enter-active,.scale-leave-active {
  transition: all 0.5s ease;
}
.card_style{
    border-radius: 0.75rem;
    border: 1px solid #fff;
    height: 135px;
    &:hover{
        border-color: #00BCC3;
    }
    .card_body{
        margin-top: 0.38rem;
        margin-bottom: 1.5rem;
    }
}

.scale-enter-from,.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>