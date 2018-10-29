import Vue from 'vue';
import App from './app';
import store from './store/index';
import '../base/style/global.less';

const root = document.getElementById('root');

new Vue({
	store,
	render: h => h(App),
}).$mount(root);

Vue.config.devtools = true;
