
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//一级路由
import Home from './components/Home'
import Register from './components/Register'
import Menu from './components/Menu'
import Login from './components/Login'
import Admin from './components/Admin'
import About from './components/about/About'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'
import History from './components/about/History'
Vue.use(VueRouter);

const routes = [
  {path:'/',component:Home},
  {path:'/menu',component:Menu},
  {path:'/admin',component:Admin},
  {path:'/register',component:Register},
  {path:'/login',component:Login},
  {path:'/about',redirect:'/about/contact',component:About,
  children:[
    {path:'/about/history',component:History},
    {path:'/about/contact',component:Contact},
    {path:'/about/orderingguide',component:OrderingGuide},
    {path:'/about/delivery',component:Delivery},
  ]
  },
  {path:'/*',redirect:'/'}
]
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
