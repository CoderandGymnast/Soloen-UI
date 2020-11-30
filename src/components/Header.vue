<template>
  <div class="hello">
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
