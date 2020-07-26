import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'companies',
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !localStorage.getItem('userId')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/companies',
    name: 'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !localStorage.getItem('userId')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: 'about' */ '../views/Products.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name !== 'Login' && !localStorage.getItem('userId')) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      if (to.name === 'Login' && localStorage.getItem('userId')) next({ name: 'Home' });
      else next();
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: 'about' */ '../views/SignUp.vue'),
    beforeEnter: (to, from, next) => {
      if (to.name === 'Signup' && localStorage.getItem('userId')) next({ name: 'Home' });
      else next();
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
