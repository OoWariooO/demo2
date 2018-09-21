<template>
  <!--<h1>menu</h1>-->
  <div>
    <!--菜单-->
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <table class="table">
          <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td colspan="3"><strong>{{item.name}}</strong></td>
          </tr>
          <tr>
            <td colspan="3"><strong>{{item.description}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button class="btn btn-sm btn-outline-success" @click="addToBasket(item,option)">+</button></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4 col-sm-12">
        <div v-if="basket.length>0">
          <table class="table">
            <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
            </thead>
            <tbody v-for="item in basket" :key="item.name">
            <tr>
              <td>
                <button class="btn btn-sm" @click="decreaseQuatity(item)">-</button>
                <span>{{item.quantity}}</span>
                <button class="btn btn-sm" @click="increaseQuatity(item)">+</button>
              </td>
              <td>{{item.name}}&nbsp;{{item.size}}寸</td>
              <td>{{item.price*item.quantity}}</td>
            </tr>
            </tbody>
          </table>
          <p>总价：{{total+'RMB'}}</p>
          <button class="btn btn-success btn-block">提交</button>
        </div>
        <div v-else>{{basketText}}</div>

      </div>
    </div>


  </div>
</template>

<script>
    export default {
        // name: "Menu"
      data(){
        return{
          basket:[],
          basketText:'购物车暂无商品',

          getMenuItems:{
            1: {
              'name': '榴莲pizza',
              'description': '这是喜欢吃榴莲朋友的最佳选择',
              'options': [{
                'size': 9,
                'price': 38
              }, {
                'size': 12,
                'price': 48
              }]
            },
            2: {
              'name': '芝士pizza',
              'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
              'options': [{
                'size': 9,
                'price': 38
              }, {
                'size': 12,
                'price': 48
              }]
            },
            3: {
              'name': '夏威夷pizza',
              'description': '众多人的默认选择',
              'options': [{
                'size': 9,
                'price': 36
              }, {
                'size': 12,
                'price': 46
              }]
            }
          }
        }
      },
      computed:{
        total(){
          let totalCost = 0;
          for(let index in this.basket){
            let individualItem = this.basket[index];
            totalCost += individualItem.quantity*individualItem.price;
          }
          return totalCost;
        }
      },
      methods:{
        addToBasket(item,option){
          let basketitem = {
            name:item.name,
            size:option.size,
            price:option.price,
            quantity:1
          }
          if(this.basket.length>0){

            //过滤
            let res=this.basket.filter((basketitem)=>{

              return basketitem.name === item.name && basketitem.price===option.price

            });

            if(res !=null && res.length>0){
               res[0].quantity++;
             }else {
               this.basket.push(basketitem);
            }
          }else {
            this.basket.push(basketitem);
          }

        },
        decreaseQuatity(item){
          item.quantity--;
          if(item.quantity<=0){
            this.removeFromBasket(item);
          }
        },
        increaseQuatity(item){
          item.quantity++;
        },
        removeFromBasket(item){
          this.basket.splice(this.basket.indexOf(item),1);
        }
      }
    }
</script>

<style scoped>

</style>
