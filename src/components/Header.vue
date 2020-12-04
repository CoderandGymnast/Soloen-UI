<template>
  <div class="hello">
  <div class="row">
  <div class="image"><img src="static/img/logo.png" alt=""></div>
      <router-link to="/">Home</router-link>
       <router-link to="/wallet">Connect to Wallet</router-link>
       <router-link to="/about-us">About Us</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  margin-left: 10px;
  width:180px;
  float:left;
}
li {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
