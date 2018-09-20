<template>

  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎使用此订餐系统</h1>
        <h2>这里有你喜欢的食物</h2>
      </div>
    </div>
    <!--<h1>home</h1>-->
    <!--<button @click="goToMenu" class="btn btn-success">Let's order!</button>-->
  </div>
</template>

<script>
    export default {
        name: "Home",
      methods:{
        // goToMenu(){
        //   //跳转到上一次浏览的页面
        //   //this.$router.go(-1);
        //   //this.$router.replace('/menu')
        //   //this.$router.push('/menu')
        //   //console.log($router);
        // }
      }
    }
</script>

<style scoped>
#home{
  background: url("../assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
}
h1,h2{margin: 6%}
.background{
    background-color: #eee;
    opacity: 0.8;
    max-width: 70VW;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
