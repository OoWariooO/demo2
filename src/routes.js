
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



export const routes = [
  {path:'/',components:{
    default:Home,
      'delivery':Delivery,
      'orderingguide':OrderingGuide,
      'history':History
    }},
  {path:'/menu',component:Menu},
  {path:'/admin',component:Admin
    //  路由独享守卫
    // ,
    // beforeEnter:(from,to,next)=>{
    //   alert('非登录状态不能使用！');
    //   next('/login');
    // }

  },
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

//全局守卫 笔记：用于全局判定导航点击后的事件，例如下方注释表示未登录状态点击其他版块都会回流到登录模块（除直接点击登录跟注册模块）。

//笔记：导航解析流程如下：
// 完整的导航解析流程
// 导航被触发。
// 在失活的组件里调用离开守卫。
// 调用全局的 beforeEach 守卫。
// 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 在路由配置里调用 beforeEnter。
// 解析异步路由组件。
// 在被激活的组件里调用 beforeRouteEnter。
// 调用全局的 beforeResolve 守卫 (2.5+)。??不明白做啥用的，需要查相关资料
// 导航被确认。
// 调用全局的 afterEach 钩子。
// 触发 DOM 更新。
// 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
//from https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B


// router.beforeEach((to,from,next)=>{
//   // alert('未登录状态，请先登录');
//   // next();
//   //判断store.gettes.islogin ===false
//   if(to.path == '/login'||to.path == '/register'){
//     next();
// }else{
//     alert('1');
//     next('/login')
// }

//
//  // console.log(to);
// })

//后置钩子
//笔记：后置钩子
// router.afterEach((to,from)=>{
//  alert('after each');
// })
