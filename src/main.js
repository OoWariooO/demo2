
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import {routes} from "./routes";
import  {store} from "./store/store.js";

'./store/store.js'
import Vuex from 'vuex'
//import {setCookie} from './until/until.js'
import {setCookie,getCookie,delCookie} from "./until/until";

Vue.use(VueRouter);

Vue.prototype.$cookie = {setCookie,getCookie,delCookie};

Axios.defaults.baseURL = 'https://wd2323984238ivjjvi.wilddogio.com/'
Vue.prototype.$http = Axios
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
   //console.log(savedPosition);
  }
})
//
router.beforeEach((to, from, next) => {
  if(to.path=='/admin'||to.path=='/menu'){
    if(store.state.isLogin){
      next();
    }else (
      next('/login')
    )
     //console.log(store.state.isLogin)
    //this.store.dispatch('setUser',getCookie('username'));
    // if(getCookie('username')){
    //
    // }
  }else {
    next();
  }
})

new Vue({
  el: '#app',
  router,
  store,//一定要应用，刚刚查这个问题查了1个小时最后发现没应用！！！！！
  render: h => h(App)
})
