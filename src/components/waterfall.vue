<template>
	<div class="limit-box">
		<v3-waterfall :key="forUpdate" class="waterfall" :list="list" srcKey="cover" :gap="12" :distanceToScroll="200" scrollBodySelector=".limit-box" :isMounted="isMounted" :isLoading="loading" :isOver="over" @scrollReachBottom="getNext">
			<template v-slot:default="slotProp">
				<div style="background: rgb(255, 255, 255);border-radius:9px; padding: 20px;">
					<div >{{ slotProp.item.name }}</div>
					<div style="text-align: center;">
						<a-progress style="margin-left:10px" v-for="(child,i) in slotProp.item.list" :steps="child.all" :key="i" type="circle" :percent="child.number" :width="filtersProgressWidth(slotProp.item.list.length)">
							<template #format="percent"><span style="color: red">{{ percent }}</span></template>
						</a-progress>
					</div>
				</div>
			</template>
		</v3-waterfall>
	</div>
</template>
  
<script lang="ts" setup>
    import { onMounted, ref } from 'vue'
    import { getData } from '@/mock/mock'
	const list = ref<unknown[]>([])
    const loading = ref(false)
    const over = ref(false)
	const isMounted = ref(false)
    const forUpdate = ref(0)

    const fetchList = async (): Promise<void> => {
		loading.value = true
		const newList = await getData()
		loading.value = false

		list.value = list.value.concat(newList)
		if (list.value.length > 120) over.value = false
		isMounted.value = true
    }

    onMounted(fetchList)

    let isLoad = false
    const getNext: () => Promise<void> = async (): Promise<void> => {
		if (isLoad) return
		isLoad = true
		await fetchList()
		isLoad = false
    }
	const filtersProgressWidth =(number:any)=>{
		let txt = 0;
      	switch (number) {
			case 1:
				txt = 55;
			break;
			case 2:
				txt = 45;
			break;
			case 3:
				txt = 45;
			break;
			case 4:
				txt = 35;
			break;
      	}
      return txt;
	}
</script>
  
<style lang="less" scoped>
.limit-box {height: 100%;overflow-y: scroll;}
.limit-box:hover{
	// 滚动条宽度
	::-webkit-scrollbar{width: 6px;}
	/* 定义滚动条轨道 */
	::-webkit-scrollbar-track{-webkit-box-shadow:none;border-radius: 10px;background-color: transparent;}
	/* 滑块 */
	::-webkit-scrollbar-thumb {	border-radius: 10px;background-color: rgba(0, 0, 0, 1);}
}
// 滚动条宽度
::-webkit-scrollbar{  width: 6px;}
/* 定义滚动条轨道 */
::-webkit-scrollbar-track{  -webkit-box-shadow:none;  border-radius: 10px;  background-color: transparent;}
/* 滑块 */
::-webkit-scrollbar-thumb {  border-radius: 10px;  background-color: rgba(0, 0, 0, 0.2);}

.progressWidth1{ width: 55px;}
.progressWidth2{ width: 45px;}
.progressWidth3{ width: 45px;}
.progressWidth4{ width: 35px;}
  </style>