<script setup lang="ts">
import Header from './header.vue'
import leftNav from './leftNav.vue'
import {onBeforeMount ,ref} from 'vue';
const contentHeight = ref<number>(0);
onBeforeMount(()=>{
	contentHeight.value = document.documentElement.clientHeight -230;
})

</script>
<template>
	<a-layout class="layoutClass">
		<Header/>
		<a-layout-content style="padding-right:50px;margin-bottom: 30px;" :style="'height:'+contentHeight+'px'">
			<a-layout style="padding: 24px 0;">
				<leftNav/>
				<a-layout>
					<router-view v-slot="{ Component }" class="content_box">
						<transition name="scale" mode="out-in" :contentHeight="contentHeight"><component :is="Component"  /></transition>
					</router-view>
				</a-layout>
			</a-layout>
		</a-layout-content>
	</a-layout>
</template>

<style scoped>
.content_box{
	background-color: #fff; min-width: 80%;
}


.scale-enter-active,.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}


</style>
