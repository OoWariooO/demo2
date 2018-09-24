
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import {routes} from "./routes";
import  {store} from "./store/store.js";

'./store/store.js'
import Vuex from 'vuex'

Vue.use(VueRouter);

Axios.defaults.baseURL = 'https://wd2323984238ivjjvi.wilddogio.com/'
Vue.prototype.$http = Axios
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
   //console.log(savedPosition);
  }
})
new Vue({
  el: '#app',
  router,
  store,//一定要应用，刚刚查这个问题查了1个小时最后发现没应用！！！！！
  render: h => h(App)
})
