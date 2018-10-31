import Vue from 'vue';
import router from './router/router';
import App from './app';
import '../base/style/global.less';

const root = document.getElementById('root');

new Vue({
  router,
	render: h => h(App),
}).$mount(root);

Vue.config.devtools = true;
