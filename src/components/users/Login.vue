<template>
  <div class="Login">
    <div class ="row title" style="">
      <h1 style ="float:left">Login</h1>
    </div>
    <div class="row card-header"></div> 
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
h1, h2 {
  font-weight: normal;
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
