<template>
    <div style="padding-top: 40px;">
        <div style="color: rgb(51, 51, 51);font-family: PingFang SC;font-size: 18px;font-weight: 500;line-height: 27px;letter-spacing: 0px;text-align: left; margin-bottom: 30px;">网关主机管理</div>
        <a-radio-group v-model:value="mode" :style="{ marginBottom: '24px' }" @change="test">
            <a-radio-button value="already">已绑定主机</a-radio-button>
            <a-radio-button value="not" style="margin-left: 8px;">未绑定主机</a-radio-button>
        </a-radio-group>
        <transition name="scale" mode="out-in" >
            <div v-if="mode == 'already'">
                <a-row :gutter="16">
                    <a-col :span="4" v-for="i in 16" :key="i" style="margin-bottom:12px" @click="cardTextClick(i)" :defaultActiveTabKey="2" :activeTabKey="3">
                        <a-card :bordered="false"  hoverable class="card_style">
                            <p><i class="iconfont icon-zhuji"></i><label m-l-3 text-base>主机名称{{ i }}</label></p>
                            <p p-l-7 m-t-4 text-sm class="lable_text">已绑定{{ i }}个传感器</p>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
            <div v-else-if="mode == 'not'">
                <a-row :gutter="16">
                    <a-col :span="4" v-for="i in 16" :key="i" style="margin-bottom:12px" @click="cardTextClick(i)" :defaultActiveTabKey="2" :activeTabKey="3">
                        <a-card :bordered="false"  hoverable class="card_style">
                            <p><i class="iconfont icon-zhuji"></i><label m-l-3 text-base>主机名称{{ i }}</label></p>
                            <p p-l-7 m-t-4 text-sm class="text-[#2E81FF]">未绑定</p>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </transition>
        <a-drawer v-model:visible="visible" class="custom-class" placement="right"  :mask="false" size="large"> 
            <div class="drawer_title" p-b-5>
                <p><i class="iconfont icon-zhuji"></i><label m-l-3 text-base>主机名称2</label></p>
                <p p-l-7 m-t-4 text-sm class="lable_text" v-if="mode =='already'">已绑定1个传感器</p>
            </div>
            <div v-if="mode =='already'">
                <div class="drawer_body" h-175>
                    <c-scrollbar height="100%" class="p-t-4 p-l-1">
                        <a-row :gutter="12" w-full>
                            <a-col :span="8" v-for="(i, ind) in state.scopeList" :key="ind" style="margin-bottom:12px"  :defaultActiveTabKey="2" :activeTabKey="3">
                                <a-checkbox-group v-model:value="state.checkedList" @change="onCheckChange" w-full>
                                    <a-card :bordered="false"  hoverable class="card_style drawer_card_style" relative h-54>
                                        <a-button text-base rounded-2xl class="title_btn" text-sm>主机名称{{ i.id }}</a-button>
                                        <p m-t-3 text-base ___>电缆头A相测温</p>
                                        <p m-t-3 text-sm h-4 leading-4 class="lbale_info">主机/编号：2032923232132</p>
                                        <p m-t-1 text-sm h-8 leading-4 class="lbale_info">金明福驿站配电室/26号间隔世华K21</p>
                                        <a-button type="primary" w-full h-8 m-t-3 @click="showModal">替换</a-button>
                                        <a-checkbox :value="i.id" class="has-plan-padding absolute top-3.5 right-3.5" name="all"  />
                                    </a-card>
                                </a-checkbox-group>
                            </a-col>
                        </a-row>
                    </c-scrollbar>
                </div>
            </div>
            <div v-else-if="mode =='not'">
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="drawer_bottom" p-t-7>
                <a-checkbox v-model:checked="state.checkAll" :indeterminate="state.indeterminate" name="all" @change="checkAllChange($event)" >全选</a-checkbox>
                <a-button type="primary" float-right>删除</a-button>
            </div>
           
        </a-drawer>
        <a-modal v-model:visible="visible1" @ok="handleOk" width="720px">
            <template #title>
                <div text-center> <span text-lg antialiased font-medium >替换传感器</span></div>
            </template>
            <div class="body_content_box">
                <div>
                    <p text-sm color="#333" leading-6 font-medium m-b-2>原传感器信息</p>
                    <div class="bg-#F5F7F9" p-5 rounded-xl>
                        <div :bordered="false"  hoverable class="card_style drawer_card_style" relative h-44 w-56 bg="#fff">
                            <a-button text-base rounded-2xl class="title_btn" text-sm style="padding-top:0px;padding-bottom:0px;line-height: 22px; height: 24px;padding-left: 8px; padding-right: 8px; cursor: default;">主机名称</a-button>
                            <p m-t-3 text-sm >电缆头A相测温</p>
                            <p m-t-1 text-xs >编号:FGV4543</p>
                            <p m-t-3 text-xs h-4 leading-4 class="lbale_info">主机/编号:2032923232132</p>
                            <p m-t-1 text-xs h-8 leading-4 class="lbale_info">金明福驿站配电室/26号间隔世华K21</p>
                        </div>
                    </div>
                </div>
                <div class="" m-t-8>
                    <div>
                        <span text-sm color="#333" font-medium m-b-2 leading-8>原传感器信息</span>
                        <a-select ref="select" style="width: 120px"  float-right>
                            <a-select-option value="全部">全部</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                            <a-select-option value="Yiminghe">yiminghe</a-select-option>
                        </a-select>
                    </div>
                    <div h-80>
                        <c-scrollbar height="100%" class="p-t-4 p-l-1">
                            <a-row :gutter="12" w-full>
                                <a-col :span="8" v-for="(i, ind) in state.scopeList" :key="ind" style="margin-bottom:12px"  :defaultActiveTabKey="2" :activeTabKey="3">
                                    <a-checkbox-group v-model:value="state.checkedList" @change="onCheckChange" w-full>
                                        <a-card :bordered="false"  hoverable class="card_style drawer_card_style" relative h-39 style="border-color:#ccc">
                                            <a-button type="primary" style="padding-top:0px;padding-bottom:0px; border-radius:4px;line-height: 22px; height: 24px;padding-left: 8px; padding-right: 8px; cursor: default;">主机名称{{ i.id }}</a-button>
                                            <p m-t-3 text-base ___>电缆头A相测温</p>
                                            <p m-t-3 text-sm h-4 leading-4 class="lbale_info">编号:032923232132</p>
                                            <p m-t-1 text-sm h-8 leading-4 class="lbale_info">金明福驿站配电室/26号间隔世华K21</p>
                                            <a-checkbox :value="i.id" class="has-plan-padding absolute top-3.5 right-3.5" name="all"  />
                                        </a-card>
                                    </a-checkbox-group>
                                </a-col>
                            </a-row>
                        </c-scrollbar>
                    </div>
            </div>
            </div>
            <template #footer>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk1" h-9>确定</a-button>
                <a-button key="back" @click="handleCancel" h-9>取消</a-button>
            </template>
        </a-modal>
    </div>
</template>
<script lang="ts" setup name="gateway">
import {  ref ,reactive} from 'vue';

const mode = ref('already');
const test = (e:any) => {
    mode.value = e.target.value;
    console.log( e.target.value)
};
const cardTextClick = (data:any)=>{
    console.log(data)
    visible.value = true;
}

const visible = ref<boolean>(false);
const state = reactive({
    indeterminate:false,
    checkAll:false,
    checkedList: ref([] as any),
    scopeList: [
        {name: "新增服务",id: 0,},
        {name: "分组管理",id: 1,},
        {name: "样式设置",id: 2,},
        {name: "批量操作",id: 3,},
        {name: "编辑",id: 4,},
        {name: "删除",id: 5,},
        {name: "删除",id: 7,},
    ],
});
const checkAllChange = (e:any) => {
    let withOutPmIds = state.scopeList.map((item) => { return item.id;});
    state.checkedList = e.target.checked? withOutPmIds: [];
};
const onCheckChange =  () => {
    const checkedLength = state.checkedList.length;
    const listLength = state.scopeList.length;
    state.indeterminate =!!checkedLength && checkedLength < listLength;
    state.checkAll =checkedLength > 0 && checkedLength === listLength;
};

const visible1 = ref<boolean>(false);
const showModal = () => {
    visible1.value = true;
};

const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible1.value = false;
};
const loading = ref<boolean>(false);
 
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
</script>
<style lang="less" scoped>
.ant-radio-button-wrapper,.ant-radio-button-wrapper-checked{ height: 34px;}
.card_style{
    border-radius: 0.75rem;
    border: 1px solid #fff;
    
    &:hover{
        border-color: #00BCC3;
    }
}
.lable_text{color: @primary-color;}
.drawer_card_style{
    border-color: @primary-color;
    box-shadow: none;
    padding: 0.85rem !important;
}

.lbale_info{color: #999999;}
.title_btn{border-radius: 4px; color: @primary-color; border-color: @primary-color;}

.scale-enter-active,.scale-leave-active { transition: all 0.5s ease;}
.scale-enter-from,.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.custom-class{
    .drawer_title{
        border-bottom: 1px solid ;
        border-color: @borderColor;
    }
}


</style>
  