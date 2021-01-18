<template>
  <div class="Login">
    <h1 style ="float:left;width:100%;">Login</h1>
    <div class="row card-header">
    <span style ="text-align:center;color:#FFF;margin: 0 auto;font-size: 36px;">Login with email</span>
    </div> 
    <div class=" login-email-box mx-auto">
    <form @submit.prevent='handleLogin'>
      <div class="form-group">
        <span for="Email">Email address</span>
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" v-model="Email" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <span for="psswd">Password</span>
        <input type="password" class="form-control" id="psswd" v-model="Password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-danger">Submit</button>
      <div class="form-group">
        <a><span>Forgot Password ?</span></a>
        <router-link to="/myaccount/register" style="float:right;">Sign Up</router-link>
      </div>
    </form>
    </div>
  </div>      
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  methods: {
    async handleLogin(){
      const response = await axios.post('http://localhost:8000/',{
            Email: this.Email,
            Password: this.Password,
        })
        localStorage.setItem('token',response.data.token)
        const address = response.data.user['address']
        this.$router.push(`/myaccount/wallet/${address}`)
    }
  },
  data () {
    return {
      Email: '',
      Password:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
button {
  width: 100%;
  height: 4.375rem;
  margin-left: 0px; 
}
input {
 height: 4.375rem
}
.title  > h1 {
  padding-left: 11px;
}
.card-header {
  min-height:100px; 
  background-color:#474747;
  width:100%;
  margin-left:0px;
}
.login-email-box{
  padding-top:2.5rem;
   width:50%;
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
  color: #6C757D;
}
</style>
