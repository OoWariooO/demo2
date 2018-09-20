
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import {routes} from "./routes";

Vue.use(VueRouter);

Axios.defaults.baseURL = 'https://wd7437060945arrkhb.wilddogio.com/'
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
   console.log(savedPosition);
  }
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
