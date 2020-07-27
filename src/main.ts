import VueToastify from 'vue-toastify';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';

Vue.use(VueToastify);
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
