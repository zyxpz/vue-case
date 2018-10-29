<template>
	<header class="header">
		<h1>{{num}}</h1>
	</header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
    num: state => state.main.num,
  }),
  },
};
</script>


<style lang="less">
.header {
  text-align: center;
}
</style>
