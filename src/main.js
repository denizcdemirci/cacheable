import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import axios from './plugins/axios';

Vue.prototype.$moment = moment;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.component('loading', () => import('./components/loading'));

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
