import Vue from 'vue';
import App from './app';
import './base/style/global.less';

const root = document.getElementById('root');

new Vue({
	render: h => h(App),
}).$mount(root);
