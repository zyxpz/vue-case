<template>
<div id="app">
<Header></Header>
<Main></Main>
</div>
</template>;
<script>
import Header from './component/header';
import Main from './component/main';

export default {
	components: {
		Header,
		Main,
	},
};
</script>;

<style lang="less">
	#app {
		Header {
			color: red;
		}
		.main {
			color: blue;
		}
	}
</style>
