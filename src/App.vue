<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="list-container">
      <div>
        <the-header></the-header>
        <the-filter></the-filter>
        <the-list></the-list>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'
import TheList from './components/TheList.vue'
import TheFilter from './components/TheFilter.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheList,
    TheFilter
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.list-container {
  margin: 10px 
}
</style>
