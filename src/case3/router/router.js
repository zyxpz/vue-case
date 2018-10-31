import Vue from 'vue';
import VueRouter from 'vue-router';
import Page1 from '../page/page1.vue';
import Page2 from '../page/page2.vue';
import Page3 from '../page/page3.vue';
import Page4 from '../page/page4.vue';
import Page5 from '../page/page5.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/page3', component: Page3 },
  { path: '/page4', component: Page4 },
  { path: '/page5/:id', component: Page5 },
  { path: '/', redirect: '/page1' },

];
const router = new VueRouter({
  routes,
});

export default router;
