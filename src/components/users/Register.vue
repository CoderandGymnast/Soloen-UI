<template>
 <div class="Register">
    <h1 style ="float:left;width:100%;">Register</h1>
    <div class="row card-header">
    <span style ="text-align:center;color:#FFF;margin: 0 auto;font-size: 36px;">Create account</span>
    </div> 
    <div class=" register-email-box mx-auto">
    <form>
      <div class="form-group">
        <span for="exampleInputEmail1">Email address</span>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the correct email address">
      </div>
      <div class="form-group">
        <span for="exampleInputPassword1">Password</span>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password">
      </div>
      <div class="form-group">
        <span for="exampleInputPassword2">Confirm password</span>
        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Enter password again">
      </div>
      <button type="submit" class="btn btn-danger">Create</button>
      <div class="form-group">
      <div style="float:right;">
      <span>I have an account, </span>
      <router-link to="/myaccount/login">Login now</router-link>
      </div> 
      </div>
    </form>
    </div>
  </div>   
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-header {
  min-height:100px; 
  background-color:#474747;
  width:100%;
  margin-left:0px;
}
.register-email-box{
  padding-top:2.5rem;
   width:50%;
}
input {
 height: 4.375rem
}
button {
  width: 100%;
  height: 4.375rem;
  margin-left: 0px; 
}
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
  color: #c12e3a;
}
</style>
