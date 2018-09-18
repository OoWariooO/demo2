<template>
  <div id="app">
    <div class="container">
      <appheader></appheader>
    </div>
    <div class="container">
      <router-view></router-view>
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
