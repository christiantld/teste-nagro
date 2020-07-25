import Vue from 'vue';
import axios from 'axios';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      // Base URL da API
      baseURL: 'https://5f1aff12610bde0016fd343f.mockapi.io/',
    });
  },
});
