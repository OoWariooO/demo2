<template>
  <!--<h1>about</h1>-->
  <div>
    <div class="row md-5">
      <div class="col-4">
        <div class="list-group md-5">
          <ul>
            <router-link tag="li" class="nav-link" to="/about/history">
              <a class="list-group-item list-group-item-action">历史订单</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/about/contact">
              <a class="list-group-item list-group-item-action">联系我们</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/about/orderingguide">
              <a class="list-group-item list-group-item-action">点餐文档</a>
            </router-link>
            <router-link tag="li" class="nav-link" to="/about/delivery">
              <a class="list-group-item list-group-item-action">快递信息</a>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
