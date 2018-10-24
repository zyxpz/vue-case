import Vue from 'vue';
import App from './app';

const root = document.getElementById('root');

new Vue({
	render: h => h(App),
}).$mount(root);
