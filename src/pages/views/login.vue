<!-- src\views\login\index.vue -->
<template>
 <a-button class="submit-button" type="primary" native-type="submit" @click="handleSubmit" >登录</a-button>
</template>

<script lang="ts" setup>
import {login } from '@/sysConfig/api/sys'
import {useStore} from '@/sysConfig/store'

const router = useRouter()
const store = useStore()
// 表单提交
const handleSubmit = () => {
  let aa = { "username": "test_yanzhiliang","password": "yjw@2023" }
  login(aa).then((res) => {
    store.setUser({ token: res.data })
	// 处理响应
	router.replace({    name: 'index'  })
  })
  
}
 

</script>
 

<route lang="yaml">
  meta:
    layout: false
</route>
