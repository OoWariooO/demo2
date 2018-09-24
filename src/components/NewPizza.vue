<template>
  <form @submit.prevent="addMenuItem">
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label for="" class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.name" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <p><strong>选项1：</strong></p>
    <div class="form-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.size1" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.price1" class="form-control">
      </div>
    </div>
    <p><strong>选项2：</strong></p>
    <div class="form-group row">
      <label for="" class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.size2" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <label for="" class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" v-model="newPizza.price2" class="form-control">
      </div>
    </div>
    <div class="form-group row">
      <button class="btn btn-block btn-success">添加</button>
    </div>
    <p v-if="scessText!=''"><strong>{{scessText}}</strong></p>
  </form>
</template>

<script>
    export default {
        //name: "NewPizza"
      data(){
        return{
          newPizza:{},
          scessText:''
        }
      },

      methods:{
        addMenuItem(){
          //console.log(this.newPizza);
          let data = {
            name:this.newPizza.name,
            description:this.newPizza.description,
            options:[{
              size:this.newPizza.size1,
              price:this.newPizza.price1
            },
          {
            size:this.newPizza.size2,
              price:this.newPizza.price2

          }]
          }
          //console.log(data);
          // fetch('https://wd7437060945arrkhb.wilddogio.com/menutony.json',{
          //   method:'post',
          //   headers:{
          //     'Content-type':'application/json'
          //   },
          //   body:JSON.stringify(data)
          // })
          //   .then(
          //           res=>console.log(res)
          //           //this.scessText = '创建成功'

          //       )
          //   .then(data=>{
          //     this.$router.push('/menu')
          //   })
          // this.$http.post('menutony.json',data)
          //           .then(ren=>this.$router.push('/menu'));
          //数据同步vuex
           // this.$http.post('menutony.json',data)
          //           .then(ren=>this.$router.push('/menu'));
           this.$http.post('menutony.json',data)
                    .then(ren=>{
                      this.$store.commit('pushToMenuItems',data)
                    });

        }
      }
    }
</script>

<style scoped>

</style>
