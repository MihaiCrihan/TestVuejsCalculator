<template>
  <div id="app">
    <Menu/>
      <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'


export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

<style>
span{
  font-size: 25px;
}
html{
  background:#5A7185;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #5A7185;
  
}
</style>
