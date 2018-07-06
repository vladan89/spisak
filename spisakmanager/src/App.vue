<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
  @import '../static/css/style.css';
</style>

<script>
  import Navbar from './components/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
