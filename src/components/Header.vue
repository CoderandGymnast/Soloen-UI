<template>
  <div class="hello sticky-top">
  <div class="row">
  <div class="image col-md-1"><img src="static/img/logo.png" alt="logo"></div>
  <div class="nav col-md-11">      
  <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="/">SOLOEN</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/#/about-us">ABOUT US</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav  v-if="!address" class="ml-auto">
      <b-nav-item href="/#/myaccount/register">REGISTER</b-nav-item>
        <b-nav-item href="/#/myaccount/login" >LOG IN</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav  v-if="address" class="ml-auto">
        <b-nav-item href="/#/myaccount/wallet/">MY WALLET</b-nav-item>
        <b-nav-item  @click="HandleClick" >LOG OUT</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    LoginClick(){

    }
    ,
    HandleClick(){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('address')
      this.$router.push({path:'/'})
      //location.reload();
    }
  },
  data () {
    return {
      address: localStorage.getItem('address')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-color {
  color: #fff;
  background-color: #ed3443!important;
}
.search{
  margin-top:30px
}
 input {
 height:4.375rem;
 float:left;
}
button {
 padding: 26px 42px;
 margin:0px 0px 15px 1px;
 float:left;
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
