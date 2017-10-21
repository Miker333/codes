<template>
  <div id="app">
   <!-- <m-header></m-header> -->
   <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from "../src/components/HelloWorld"
import Tab from "../src/components/index"

export default {
  components:{
            MHeader,
            Tab
          }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
