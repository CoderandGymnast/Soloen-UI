<template>
  <div class="hello">
  <div class="row">
  <div class="image"><img src="static/img/logo.png" alt=""></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Home</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/about-us">About Us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav " style="float:right">  
          <li class="nav-item active">
            <router-link class="nav-link" to="/wallet">Connect to Wallet</router-link>
          </li>
           <li class="nav-item active log">
            <router-link class="nav-link " to="/myaccount/login">Register/ Login</router-link>
          </li>
        </ul>
      </div>
</nav>
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
nav {
  width: 89%;
}

img {
  margin-left: 10px;
  width:180px;
  float:left;
}
li {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
