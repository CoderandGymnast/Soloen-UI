<template>
  <div class="hello">
  <div class="row">
  <div class="col-md-3" style="background-color:red;height:10px;"></div>
  <div class="col-md-3" style="background-color:blue;height:10px;"></div>
  <div class="col-md-3" style="background-color:green;height:10px;"></div>
  <div class="col-md-3" style="background-color:black;height:10px;"></div>
  </div>
        <router-link to="/">Home</router-link>
       <router-link to="/wallet">Connect to Wallet</router-link>
       <router-link to="/about-us">About Us</router-link>
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
li {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
