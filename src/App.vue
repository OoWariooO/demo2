<template>
  <div id="app">
    <div class="container">
      <appheader></appheader>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <router-view name="delivery"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="orderingguide"></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name="history"></router-view>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    appheader:Header
  }

}
</script>

<style>

</style>
