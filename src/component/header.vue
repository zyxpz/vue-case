<template>
	<header class="header">
		<h1>{{num}}</h1>
	</header>
</template>

<script>
export default {
	props: ['num'],
};
</script>


<style lang="less">
	.header {
		text-align: center;
	}
</style>
