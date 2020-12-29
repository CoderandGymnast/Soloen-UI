<template>
  <div class="hello">
  <div class="row">
  <div class="image col-md-1"><img src="static/img/logo.png" alt="logo"></div>
  <div class="nav col-md-11">      
    <nav class="navbar navbar-expand-lg navbar-light">
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
  <div  class="row  search mx-auto">
        <form class="form-inline mx-auto" style="margin:0px 238px;">
        <div class="form-group mx-sm-3 mb-2">
          <label for="Search" class="sr-only">Search</label>
          <input type="text" size="141px" class="form-control" id="Search" placeholder="Search by Address/TXn Hash/Token/Block">
        </div>
        <button type="submit" class="btn btn-danger mb-2">Search</button>
      </form>
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
.search{
  margin-top:30px
}
 input {
 height:4.375rem;
}
button {
 padding: 26px 32px;
}
nav {
  width: 100%;
}
img {
  margin-left: 10px;
  width:100%;
  height:90%;
  float:left;
}
li {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
