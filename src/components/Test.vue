<template>
	<div>{{ props.msg }}</div>
	<div>123456</div>
</template>

<script  lang='ts' setup>
const props = defineProps({
  msg: {
    type: String,
    default: '',
  },
})
</script>