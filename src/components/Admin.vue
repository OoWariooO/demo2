<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
        <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md 4">
      <!--品种展示-->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td>{{item.name}}</td>
          <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">X</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--<h1>admin</h1>-->
</template>

<script>
  import NewPizza from './NewPizza'
    export default {
    //调用方法
      methods:{
      deleteData(item){
        fetch('https://wd2323984238ivjjvi.wilddogio.com/menutony/'+item.id+'/.json',{
          method:'delete',
          headers:{
            'Content-type':'application/json'
          }
        })
          .then(res=>res.json())
          .then(data=>
          {
            this.$store.commit('removeItems',item)
          })
          .catch(error=>console.log(error))
      }
      },
    //注册组件
    components:{
      'app-new-pizza':NewPizza
    },
    //
    computed:{
      getMenuItems:{
        get(){
           return this.$store.state.getMenuItems;
        },
        set(){}
      }
    },


    //生命周期函数
      created(){
        fetch('https://wd2323984238ivjjvi.wilddogio.com/menutony.json')
          .then(res=>{
            return res.json();
          })
          .then(data=>{
            //console.log(data);
            let menuArray = [];
            for (let key in data){
              data[key].id = key;
              menuArray.push(data[key])
            }
            //this.getMenuItems = menuArray;
            //数据同步到Vuex中
            this.$store.commit('setMenuItems',menuArray)
          })
      }
      //name: "Admin"
      // data(){
      //   return{
      //     name:'Tony'
      //   }
      // }
    //   ,
    //
    //   //组件内导航守卫
    // //     beforeRouteEnter:(from,to,next)=>{
    // //   next(
    // //     vm=>{//vm 相当于this，调用组件数据必须在此回调函数中调用
    // //       alert('hello'+vm.name);
    // // })
    // // //笔记：组件内导航守卫如果想获取组件内data数据必须使用回调函数获取，正常获取则会undefined，因为正常调用时还未挂载，因此也就没有this跟数据
    // // }
    //   beforeRouteLeave (to, from , next) {
    //     const answer = window.confirm('确定离开此页面？')
    //     if (answer) {
    //       next()
    //     } else {
    //       next(false)
    //     }
    //   }
    }
</script>

<style scoped>

</style>
