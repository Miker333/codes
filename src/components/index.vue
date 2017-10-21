<template>
  <div>
  <h1>加载模块</h1>
    <div v-for="item in info">
      
      <router-link :to="item.path" v-text="item.name"></router-link>



    </div>
   
 
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
     



      info:[{"name":"这是商品页","path":"/goods"},
      {"name":"这是评价页","path":"/ratings"},
      {"name":"这是商家页","path":"/sellers"}]

  

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
