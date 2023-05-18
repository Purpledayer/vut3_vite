<script setup lang="ts">
import leftNav from './leftNav.vue'
import {onBeforeMount ,ref} from 'vue';


const contentHeight = ref<number>(0);
onBeforeMount(()=>{
	contentHeight.value = document.documentElement.clientHeight -40;
})

</script>
<template>
	<a-layout>
		<leftNav/>
		<a-layout p-l-3>
			<a-layout :style="'height:'+contentHeight+'px'">
				<router-view v-slot="{ Component }" class="content_box">
					<transition name="scale" mode="out-in"><component :is="Component"  :contentHeight="contentHeight"  /></transition>
				</router-view>
			</a-layout>
		</a-layout>
  	</a-layout>
</template>

<style scoped>
.content_box{
	min-width: 80%;
}


.scale-enter-active,.scale-leave-active {  transition: all 0.5s ease;}
.scale-enter-from,.scale-leave-to {  opacity: 0;  transform: scale(0.9);}


</style>
