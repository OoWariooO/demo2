<template>
  <!--<h1>login</h1>-->
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/icon.png" class="mx-auto d-block" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {setCookie} from "../until/until";

  export default{
    data(){
      return{
        email:'',
        password:''
      }
    },
    //清除登录效果
    beforeRouteEnter (to, from, next) {
      next(
        vm=>vm.$store.dispatch('setUser',null)
      )
    },
    methods:{
      onSubmit(){
          axios.get('/usertony.json')
            .then(res=>{
              //console.log(res)
              const data =res.data;
              const users = [];
              for(let key in data){
                const user = data[key];
                //console.log(user);
                users.push(user)
              }
              //console.log(users);
              let result = users.filter((user)=>{
                return user.email ===this.email &&user.password === this.password
              })
              if(result.length>0&&result!=null){
                this.$store.dispatch('setUser',result[0].email);
                this.$router.push('/home');
                //	将用户名存进cookie，第三个参数60为秒，意味着一分钟后cookie自动消失。一天为 86400 s
                this.$cookie.setCookie( 'username' ,result[0].email,60);


                //let expireDays = 1000 * 60 * 60 ;
                //this.setCookie('session',res.errData.token,expireDays); //设置Session
                //let exdate = new Date();
               // exdate.setDate(exdate.getDate() + 1000 * 60 * 60 );
                //document.cookie = 'uid' + "=" + result[0].email + ";expires=" + exdate.toGMTString();
                //this.setCookie('u_uuid',result[0].email,expireDays); //设置用户编号
              }
              else{

                alert('账号或密码错误');
                this.$store.dispatch('setUser',null);

              }

              //console.log(result);
            })
      }
    }
  }
</script>

<style scoped>

</style>
