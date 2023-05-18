<template>
    <div style="padding-top: 40px;">
        <div style="color: rgb(51, 51, 51);font-family: PingFang SC;font-size: 18px;font-weight: 500;line-height: 27px;letter-spacing: 0px;text-align: left; margin-bottom: 30px;">微服务模块管理</div>
        <a-row :gutter="12">
            <a-col :span="6" style="margin-bottom:12px;" @click.stop="add">
                <a-card :bordered="false"  hoverable class="card_style" text-center  style="padding-top:1.3rem">
                    <p><plus-outlined class="text-4xl font-normal color-[#00BCC3]"></plus-outlined></p>
                    <p m-t-6>新建模块</p>
                </a-card>
            </a-col>
            <a-col :span="6" v-for="i in 8" :key="i" style="margin-bottom:12px" @click="cardTextClick(i)"  >
                <a-card :bordered="false"  hoverable class="card_style">
                    <template #title><span text-base font-semibold>模块名称模块名称模块名称</span></template>
                    <template #extra><edit-outlined class="text-lg" @click.stop="edit" /><close-outlined class="text-lg m-l-1" @click.stop="deleteFun" /></template>
                    <div class="card_body">
                        <p text-sm>绑定节点：节点名称{{ i }}</p>
                        <p m-t-2 text-sm>厂家：海康威视/监控摄像头{{ i }}</p>
                    </div>
                    <template #actions><a text-left text-sm>2023/09/08 12:23</a><a text-right text-sm>冻结模块</a></template>
                </a-card>
            </a-col>
        </a-row>
        <a-drawer v-model:visible="visible" class="custom-class" style="color: red" title="Basic Drawer" placement="right" @close="close" :mask="false" size="large"> 
            <p>{{ drawerText }}</p>
            <p>Some contents...</p>
            <p>Some contents...</p>                                              
        </a-drawer>
    </div>
</template>                                                                                                                 
<script lang="ts" setup name="MSA">
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
</script>
<style lang="less" scoped>

.scale-enter-active,.scale-leave-active {
  transition: all 0.5s ease;
}
.card_style{
    border-radius: 0.75rem;
    border: 1px solid #fff;
    height: 168px;
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
  